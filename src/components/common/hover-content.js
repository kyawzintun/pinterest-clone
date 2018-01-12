import React, { Component } from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';

import ViewImageModal from '../modal/view-image-modal';
import SharePin from '../popup/share-pin-popup';
import SavePinModal from '../modal/save-pin-modal';
import './hover-content.css';

class HoverContent extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      viewImage: false,
    };
  }

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({ modalOpen: true });
  }
  
  handleClose = () => this.setState({ modalOpen: false });

  openImageModal = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      this.setState({ viewImage: true })
    }
  }

  closeImageModal = () => this.setState({ viewImage: false });

  render() {
    return (
      <div className="_hover-content" onClick={this.openImageModal}>
        <div className="_btn-group">
          <Popup
            trigger={
              <Button icon floated='left'>
                <Icon name='upload' />
              </Button>
            }
            on='click'
            position='bottom center'
            content={<SharePin />}
            className="_i-popup"
          />
          <Button icon floated='right' color='red' onClick={this.handleOpen}>
            <Icon name='pin' /> Save
          </Button>
        </div>
        <div className="_text">uploaded by {this.props.image.username}</div>
        <SavePinModal modalOpen={this.state.modalOpen} handleClose={this.handleClose} image={this.props.image}/>
        <ViewImageModal handleClose={this.closeImageModal} modalOpen={this.state.viewImage} imageUrl={this.props.image.url}/>
      </div>
    );
  }
}

export default HoverContent;