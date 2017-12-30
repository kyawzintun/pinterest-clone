import React, { Component } from 'react';
import { Image, Menu, Header, Label, Popup} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SearchInput from '../search/search';
import MenuPopup from '../popup/menu-popup';
import "./navbar.css";
import logo from '../../assets/images/pinterest-logo.png';
import user from '../../assets/images/user.jpg';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <Menu fixed='top' stackable className="custom-menu">
        <Menu.Item>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Item className="search-menu-item">
          <SearchInput />
        </Menu.Item>
        <Menu.Item className="menu-item">
          <Label as='a' href="/">
            <Header as='h3' className="item_1">Home</Header>
          </Label>
        </Menu.Item>
        <Menu.Item className="menu-item">
          <Label as='a' href="/">
            <Image avatar spaced='right' src={user} />
            Kyaw
          </Label>
        </Menu.Item>
        <Menu.Item className="menu-item">
          <Popup
            trigger={
              <button className="btn-1">
                <svg height="22" width="22" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img" data-reactid="91">
                  <title data-reactid="92"></title>
                  <path d="M12.00,9.00 C10.34,9.00 9.00,10.34 9.00,12.00 C9.00,13.66 10.34,15.00 12.00,15.00 C13.66,15.00 15.00,13.66 15.00,12.00 C15.00,10.34 13.66,9.00 12.00,9.00 M3.00,9.00 C4.66,9.00 6.00,10.34 6.00,12.00 C6.00,13.66 4.66,15.00 3.00,15.00 C1.34,15.00 0.00,13.66 0.00,12.00 C0.00,10.34 1.34,9.00 3.00,9.00 Z M21.00,9.00 C22.66,9.00 24.00,10.34 24.00,12.00 C24.00,13.66 22.66,15.00 21.00,15.00 C19.34,15.00 18.00,13.66 18.00,12.00 C18.00,10.34 19.34,9.00 21.00,9.00 Z" data-reactid="93"></path>
                </svg>
              </button>
            }
            on='click'
            position='bottom right'
            content={
              <MenuPopup />
            }
            className="c-popup"
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;