import React, { Component } from 'react';
import { Image, Modal, Grid, Segment } from 'semantic-ui-react'

import ChooseBoard from "../choose-board/choose-board";
import CreateBoard from "../create-board/create-board";
import "./save-pin-modal.css";

class SavePinModal extends Component {
  constructor() {
    super();
    this.state = {
      isCreateBoard: false
    }
  }

  handleBoard = () => {
    this.setState({isCreateBoard: !this.state.isCreateBoard });
  };

  render() {
    const isCreateBoard = this.state.isCreateBoard;
    return (
      <Modal size="small" className="pin-modal" open={this.props.modalOpen}>
        <Modal.Content className="pin-modal-content">
          <Grid columns='equal' className="pin-grid-wrapper">
            <Grid.Row>
              <Grid.Column className="_35 _2v pin-grid">
                <Segment className="pin-segment _2v pin-img-wrap">
                  <div className="pin-img">
                    <Image className="_img" size="large" src={require(`../../assets/images/photos/11.jpg`)} />
                  </div>
                  <div className="pin-meta">
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column className="pin-grid-2">
                <Segment className="pin-segment">
                  {!isCreateBoard &&
                    <ChooseBoard closeModal={this.props.handleClose} handleBoard={this.handleBoard} />
                  }
                  {isCreateBoard &&
                    <CreateBoard closeModal={this.props.handleClose} handleBoard={this.handleBoard} />
                  }
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