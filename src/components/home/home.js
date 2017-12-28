import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

import NavBar from '../navbar/navbar';

const baseUrl = process.env.REACT_APP_API_URL;

class Home extends Component {
  render() {
    return (
      <div className='App' >
        <NavBar />
      </div>
    );
  }
}

export default Home;