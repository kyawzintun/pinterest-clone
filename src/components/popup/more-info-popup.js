import React, { Component } from 'react';
import { Item, Header, Icon } from 'semantic-ui-react';

import "./more-info-popup.css";

class MoreInfoPopup extends Component {
  render() {
    return (
      <Item.Group className="info-popup">
        <Item className="_item">
          <Item.Content verticalAlign='middle'>
            <Header as='h3'>
              <Icon name='cancel' className="_i-head-icon"/>
              <Header.Content className="_i-head">Hide</Header.Content>
            </Header>
          </Item.Content>
        </Item>
        <Item className="_item">
          <Item.Content verticalAlign='middle'>
            <Header as='h3'>
              <Icon name='ban' className="_i-head-icon"/>
              <Header.Content className="_i-head">Report</Header.Content>
            </Header>
          </Item.Content>
        </Item>
        <Item className="_c-item">
          <Item.Content verticalAlign='middle' className="_i-content">
            You’re seeing this pin because you follow the Topic.
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default MoreInfoPopup;