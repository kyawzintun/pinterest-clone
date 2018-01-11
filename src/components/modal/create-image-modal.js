import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react'
import closeIcon from '../../assets/images/close.svg';
import "./create-image-modal.css";

class CreateImageModal extends Component {
  state = {  }
  render() {
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
          <Modal.Description>
            <Form>
              <Form.Field>
                <label className="color-555 f-size-16 l-height-18">Image URL</label>
                <input placeholder='Add image URL' className="_input-2" />
              </Form.Field>
              <Form.Field>
                <label className="color-555 f-size-16 l-height-18">Website</label>
                <input type="url" placeholder='Add the URL this Pin links to' className="_input-2" />
              </Form.Field>
              <Form.Field>
                <label className="color-555 f-size-16 l-height-18">Description</label>
                <textarea type="url" placeholder='Say something about this pin' className="_input-2"></textarea>
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted color="grey" className="cancel-btn" onClick={this.props.handleClose}>Cancel</Button>
          <Button inverted color="red">Create</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CreateImageModal;