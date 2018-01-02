import React, { Component } from 'react';
import { Button, Image, Modal, Grid, Segment, Icon,Header, Divider } from 'semantic-ui-react'

import BoardList from "../list/board-list";
import "./save-pin-modal.css";

class SavePinModal extends Component {
  render() {
    return (
      <Modal size="small" className="pin-modal" open={this.props.modalOpen} onClose={this.props.handleClose}>
        <Modal.Content className="pin-modal-content">
          <Grid columns='equal' className="pin-grid-wrapper">
            <Grid.Row>
              <Grid.Column className="_35 _2v pin-grid">
                <Segment className="pin-segment _2v">
                  <div className="pin-img">
                    <Image className="_img" size="large" src={require(`../../assets/images/photos/11.jpg`)} />
                  </div>
                  <div className="pin-meta">
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column className="pin-grid-2">
                <Segment className="pin-segment">
                  <div className="pin-head padd-1">
                    <div className="_heading">Choose board</div>
                    <div className="_close"><Icon name="close" /></div>
                  </div>
                  <div className="pin-post padd-1 p-top-bottom c-pointer hover-effect">
                    <Icon className="pin-thumb" name="image" size="big"/>
                    <span className="pin-owner padd-2">Kyaw Zin Tun</span>
                  </div>
                  <Divider />
                  <div className="board-wrap padd-1 c-pointer hover-effect">
                    <Button classNam="create-board-btn" circular color="red" icon='plus' />
                    <span className="pin-owner padd-2">Create Board</span>
                  </div>
                  <div>
                    <p className="padd-1 color-555 f-size-16 l-height-18">Suggested board names</p>
                    <BoardList />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }
}

export default SavePinModal;