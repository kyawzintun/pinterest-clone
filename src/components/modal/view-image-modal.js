import React, { Component } from 'react';
import { Image, Icon, Modal } from 'semantic-ui-react';

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
          <Image className="_img" size="large" src={require(`../../assets/images/photos/1.jpg`)} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ViewImageModal;