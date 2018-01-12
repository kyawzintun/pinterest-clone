import React, { Component } from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';

import SharePin from '../popup/share-pin-popup';
import SavePinModal from '../modal/save-pin-modal';
import './hover-content.css';

class HoverContent extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });
  
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <div className="_hover-content">
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
      </div>
    );
  }
}

export default HoverContent;