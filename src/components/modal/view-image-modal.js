import React, { Component } from 'react';
import { Image, Modal } from 'semantic-ui-react';

class ViewImageModal extends Component {
  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        onClick={this.props.handleClose}
        basic
        size='small'
        >
        <Modal.Content>
          <Image className="_img" size="large" src={this.props.imageUrl} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ViewImageModal;