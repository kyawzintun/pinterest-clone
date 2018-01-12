import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import store from 'store';

import isLoggedIn from '../helper/isLoggedIn';
import GridImage from '../wall/grid';
import NavBar from '../navbar/navbar';
import './explore.css';

const baseUrl = process.env.REACT_APP_API_URL;

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      images: []
    };
  }

  componentDidMount = () => {
    this.getImage();
  }

  getImage = () => {
    const _this = this;
    axios({
      method: 'get',
      url: `${baseUrl}image`
    }).then(function (res) {
      _this.setState({ loading: false, images: res.data });
      console.log('image get success ', res);
    }).catch(err => {
      _this.setState({ loading: false, images: [] });
      console.log('image get error ', err.response);
    })
  }
  render() {
    // if (!isLoggedIn()) {
    //   return (<Redirect to="/" />);
    // }
    return (
      <div className='App' >
        <NavBar />
        <Container fluid className="h-container">
          <GridImage images={this.state.images} />
        </Container>
      </div>
    );
  }
}

export default Explore;