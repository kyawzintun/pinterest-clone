import React, { Component } from 'react';
import { Card, Input } from 'semantic-ui-react';

import LinkIcon from '../../assets/images/link.svg';
import FaceBookIcon from '../../assets/images/facebook.svg';
import TwitterIcon from '../../assets/images/twitter.svg';
import MessengerIcon from '../../assets/images/messenger.svg';
import "./share-pin-popup.css";

class SharePin extends Component {
  render() {
    return (
      <Card>
        <Card.Content className="share-pin-text">Share this pin</Card.Content>
        <Card.Content className="_content-2">
          <button className="_social-btn"><img alt="Facebook Icon" src={FaceBookIcon} /></button>
          <button className="_social-btn"><img alt="Twitter Icon" src={TwitterIcon} /></button>
          <button className="_social-btn"><img alt="Facebook Messenger Icon" src={MessengerIcon} /></button>
          <button className="_social-btn"><img alt="Link Icon" src={LinkIcon} /></button>
        </Card.Content>
        <Card.Content className="share-pin-text">Or send to</Card.Content>
        <Card.Content className="_content-2">
          <Input className="search-user-input" size='large' icon='search' iconPosition="left" placeholder='Name or email' />
          <div className="contact-list">
            <ul className="List"></ul>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default SharePin;