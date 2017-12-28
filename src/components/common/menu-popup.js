import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

import "./menu-popup.css";

class MenuPopup extends Component {
  state = {  }
  render() {
    return (
      <Item.Group className="m-popup">
        <Item>
          <Item.Content verticalAlign='middle'>Settings</Item.Content>
        </Item>
        <Item>
          <Item.Content verticalAlign='middle'>Help Center</Item.Content>
        </Item>
        <Item>
          <Item.Content verticalAlign='middle'>Switch to business</Item.Content>
        </Item>
        <Item>
          <Item.Content verticalAlign='middle'>Terms and privacy</Item.Content>
        </Item>
        <Item>
          <Item.Content verticalAlign='middle'>Logout</Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default MenuPopup;