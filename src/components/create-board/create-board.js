import React, { Component } from 'react';
import { Button, Icon, Divider, Form } from 'semantic-ui-react'
import "./create-board.css";

class CreateBoard extends Component {
  render() {
    return (
      <div>
        <div className="pin-head padd-1">
          <div className="_heading">Create board</div>
          <div className="_close"><Icon name="close" /></div>
        </div>
        <Form>
          <div className="padd-1">
            <Form.Field>
              <label className="color-181">Name</label>
              <input className="_input" placeholder='Like &quot;Places to Go&quot; or &quot;Recipes to Make&quot;' />
            </Form.Field>
          </div>
          <Divider />
          <div className="padd-1">
            <Form.Field>
              <label className="color-181">Secret</label>
              <div className="t-btn">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </Form.Field>
          </div>
          <Divider />
          <div className="f-btn">
            <Divider />
            <div className="padd-1">
              <Button floated='right' color="red">Create</Button>
              <Button floated='left'>Cancel</Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default CreateBoard;