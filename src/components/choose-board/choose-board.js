import React, { Component } from 'react';
import { Button, Icon, Divider } from 'semantic-ui-react'
import BoardList from "../list/board-list";
import "./choose-board.css";

class ChooseBoard extends Component {
  render() {
    return (
      <div>
        <div className="pin-head padd-1">
          <div className="_heading">Choose board</div>
          <div className="_close"><Icon onClick={this.props.closeModal} className="c-pointer" name="close" /></div>
        </div>
        <div className="pin-post padd-1 p-top-bottom c-pointer hover-effect">
          <Icon className="pin-thumb" name="image" size="big" />
          <span className="pin-owner padd-2">Kyaw Zin Tun</span>
          <Button icon floated='right' color='red' className="pin-save-btn">
            <Icon name='pin' /> Save
          </Button>
        </div>
        <Divider />
        <div className="board-wrap padd-1 c-pointer hover-effect">
          <Button className="create-board-btn" circular color="red" icon='plus' />
          <span className="pin-owner padd-2" onClick={this.props.handleBoard}>Create Board</span>
        </div>
        <div>
          <p className="padd-1 color-555 f-size-16 l-height-18">Suggested board names</p>
          <BoardList />
        </div>
      </div>
    );
  }
}

export default ChooseBoard;