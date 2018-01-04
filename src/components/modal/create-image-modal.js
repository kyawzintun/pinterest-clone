import React, { Component } from 'react';
import { Button, Modal, Header, Form } from 'semantic-ui-react'
import "./create-image-modal.css";

class CreateImageModal extends Component {
  state = {  }
  render() {
    return (
      <Modal size="small" open={this.props.modalOpen}>
        <Modal.Header className="create-pin-header color-555">Create Pin</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Image URL</label>
                <input placeholder='Add image URL' className="_input-2" />
              </Form.Field>
              <Form.Field>
                <label>Website</label>
                <input type="url" placeholder='Add the URL this Pin links to' className="_input-2" />
              </Form.Field>
              <Form.TextArea label='Description' placeholder='Say something about this pin' />
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