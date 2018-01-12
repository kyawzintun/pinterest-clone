import React, { Component } from 'react';
import { Image, Menu, Header, Label, Popup} from 'semantic-ui-react';
import store from 'store';

import isLoggedIn from '../helper/isLoggedIn';
import SearchInput from '../search/search';
import MenuPopup from '../popup/menu-popup';
import "./navbar.css";
import logo from '../../assets/images/pinterest-logo.png';
import dotsIcon from '../../assets/images/dots.svg';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const user = store.get('user');
    return (
      <Menu fixed='top' stackable className="custom-menu">
        <Menu.Item>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Item className="search-menu-item">
          <SearchInput />
        </Menu.Item>
        {!isLoggedIn() &&
          <Menu.Menu position='right' className="right-menu">
            <Menu.Item className="menu-item">
              <Label as='a' href="/">
                <Header as='h3' className="item_1">Login</Header>
              </Label>
            </Menu.Item>
          </Menu.Menu>
        }
        {isLoggedIn() &&
          <Menu.Menu position='right' className="right-menu">
            <Menu.Item className="menu-item">
              <Label as='a' href="/explore">
                <Header as='h3' className="item_1">Home</Header>
              </Label>
            </Menu.Item>
            <Menu.Item className="menu-item">
              <Label as='a' href={`/${user.id}/boards`}>
                <Image avatar spaced='right' src={user.picture.data.url} />
                {user.name.split(' ')[0]}
              </Label>
            </Menu.Item>
            <Menu.Item className="menu-item">
              <Popup
                trigger={
                  <button className="btn-1">
                    <Image className="dots-svg" src={dotsIcon} />
                  </button>
                }
                on='click'
                position='bottom right'
                content={<MenuPopup /> }
                className="c-popup"
              />
            </Menu.Item>
          </Menu.Menu>
        }
      </Menu>
    );
  }
}

export default NavBar;