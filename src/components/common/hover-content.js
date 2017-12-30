import React, { Component } from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';

import SharePin from '../popup/share-pin-popup';
import './hover-content.css';

class HoverContent extends Component {
  render() {
    return (
      <div className="_hover-content">
        <div className="_btn-group">
          <Popup
            trigger={
              <Button icon floated='left'>
                <Icon name='upload' />
              </Button>
            }
            on='click'
            position='bottom center'
            content={<SharePin />}
            className="_i-popup"
          />
          <Button icon floated='right' color='red'>
            <Icon name='pin' /> Save
          </Button>
        </div>
        <div className="_text">uploaded by instagram</div>
      </div>
    );
  }
}

export default HoverContent;