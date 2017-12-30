import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
// import axios from 'axios';

import GridImage from '../wall/grid';
import NavBar from '../navbar/navbar';
import './home.css';

// const baseUrl = process.env.REACT_APP_API_URL;
const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84]

class Home extends Component {
  render() {
    return (
      <div className='App' >
        <NavBar />
        <Container fluid className="h-container">
          <GridImage images={images} />
        </Container>
      </div>
    );
  }
}

export default Home;