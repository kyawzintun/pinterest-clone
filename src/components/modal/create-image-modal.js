import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal, Form, Label } from 'semantic-ui-react'
import axios from 'axios';
import store from 'store';

import isLoggedIn from '../helper/isLoggedIn';
import closeIcon from '../../assets/images/close.svg';
import "./create-image-modal.css";

const baseUrl = process.env.REACT_APP_API_URL;
const user = store.get('user') || {};
const reqHeader = { 'email': user.email, 'id': user.id, 'username': user.name };

class CreateImageModal extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      website: '',
      description: '',
      urlError: '',
      websiteError: '',
      descriptionError: '',
      submitted: false
    };
    this.createImage = this.createImage.bind(this);
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const nameErr = name + 'Error';
    this.setState({
      [name]: value,
      [nameErr]: ''
    });
    this.validateErr(name, value, nameErr);
  }

  validateErr = (name, value, nameErr) => {
    if (!value.length) {
      this.setState({ [nameErr]: `${name} is required.` });
    } else if ((name === 'url' || name === 'website') && value.length < 6) {
      this.setState({ [nameErr]: `${name} must be 6 characters or more.` });
    } else if(name === 'url') {
      const isValid = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(value);
      if (!isValid) this.setState({ [nameErr]: "Please enter a valid image url." });
    }
  }

  isValidForm = () => {
    const state = this.state;
    if (state.urlError || state.websiteError || state.descriptionError) {
      return false;
    } else if (state.url && state.website && state.description) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const imageObj = {
      "url": this.state.url,
      "website": this.state.website,
      "description": this.state.description
    };
    this.createImage(imageObj);
  }

  createImage = (imageObj) => {
    const _this = this;
    this.setState({ submitted: true });
    axios({
      method: 'post',
      url: baseUrl + 'image/create',
      headers: reqHeader,
      data: imageObj
    }).then(function (res) {
      _this.setState({ submitted: false, url: '', website: '', description: '' });
      _this.props.handleClose();
      _this.props.handleStateChange(res.data);
    }).catch(err => {
      _this.setState({ submitted: false });
      console.log('image create error ', err.response);
    })
  }

  render() {
    if (!isLoggedIn()) {
      return (<Redirect to="/" />);
    }
    const isEnabled = this.isValidForm();
    return (
      <Modal size="small" open={this.props.modalOpen}>
        <Modal.Header className="create-pin-header color-555">
          Create Pin 
          <div className="close-icon-wrap c-pointer border-0">
            <div className="close-icon">
              <img src={closeIcon} onClick={this.props.handleClose} alt="close icon"/>
            </div>
          </div>
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.onSubmit}>
          <Modal.Description>
              <Form.Field>
                <label className="color-555 f-size-16 l-height-18">Image URL</label>
                <input
                  onChange={this.handleChange}
                  name="url"
                  value={this.state.url}
                  minLength={6}
                  maxLength={500}
                  autoFocus="on"
                  autoComplete='off'
                  required
                  type="text"  
                  placeholder='Add image URL' 
                  className="_input-2" />
                {this.state.urlError &&
                  <Label basic color='red' pointing>{this.state.urlError}</Label>
                }
              </Form.Field>
              <Form.Field>
                <label className="color-555 f-size-16 l-height-18">Website</label>
                <input
                  onChange={this.handleChange}
                  name="website"
                  value="pinterest.com"
                  minLength={6}
                  maxLength={50}
                  autoComplete='off'
                  required
                  type="text" 
                  placeholder='Add the URL this Pin links to' 
                  className="_input-2" />
                {this.state.websiteError &&
                  <Label basic color='red' pointing>{this.state.websiteError}</Label>
                }
              </Form.Field>
              <Form.Field>
                <label className="color-555 f-size-16 l-height-18">Description</label>
                <textarea 
                  onChange={this.handleChange}
                  name="description"
                  value={this.state.description}
                  minLength={5}
                  maxLength={100}
                  required
                  placeholder='Say something about this pin' 
                  className="_input-2">
                </textarea>
                {this.state.descriptionError &&
                  <Label basic color='red' pointing>{this.state.descriptionError}</Label>
                }
              </Form.Field>
          </Modal.Description>
          <Modal.Actions className="modal-action-btn">
            <Button type="submit" disabled={!isEnabled} loading={this.state.submitted} inverted color="red" floated="right">Create</Button>
            <Button inverted color="grey" className="cancel-btn" onClick={this.props.handleClose} floated="right">Cancel</Button>
          </Modal.Actions>
        </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CreateImageModal;