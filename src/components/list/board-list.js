import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

import "./board-list.css";

class BoardList extends Component {
  render() {
    return (
      <List>
        <List.Item className="list-item-1 c-pointer hover-effect padd-1">
          <List.Icon className="color-555" name='plus' />
          <List.Content className="color-555 f-size-18">Technology</List.Content>
        </List.Item>
        <List.Item className="list-item-1 c-pointer hover-effect padd-1">
          <List.Icon className="color-555" name='plus' />
          <List.Content className="color-555 f-size-18">Photography Idea</List.Content>
        </List.Item>
        <List.Item className="list-item-1 c-pointer hover-effect padd-1">
          <List.Icon className="color-555" name='plus' />
          <List.Content className="color-555 f-size-18">Travel</List.Content>
        </List.Item>
        <List.Item className="list-item-1 c-pointer hover-effect padd-1">
          <List.Icon className="color-555" name='plus' />
          <List.Content className="color-555 f-size-18">Fashion</List.Content>
        </List.Item>
      </List>
    );
  }
}

export default BoardList;