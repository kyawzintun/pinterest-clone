import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import store from 'store';
import PropTypes from "prop-types";
import { withRouter } from 'react-router'

import "./menu-popup.css";

class MenuPopup extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleLogout = () => {
    store.remove('user');
    this.props.history.push('/');
  }

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
          <Item.Content verticalAlign='middle' onClick={this.handleLogout}>Logout</Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default withRouter(MenuPopup);