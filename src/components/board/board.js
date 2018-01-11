import React, { Component } from 'react';
import { Container, Grid, Segment, Header, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import NavBar from "../navbar/navbar";
import GridImage from '../wall/grid';
import CreateImageModal from '../modal/create-image-modal';
import isLoggedIn from '../helper/isLoggedIn';
import "./board.css";

const square = { width: 175, height: 175 }
const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    if (!isLoggedIn()) {
      return (<Redirect to="/" />);
    }
    return (
      <div className="board-root">
        <NavBar />
        <Container>
          <div className="profile-header-wrapper">
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h2' className="user-name color-555">Kyaw Zin Tun</Header>
                  <div className="f-wrap">
                    <div className="f-left c-pointer">
                      <div className="color-555">0</div>
                      <div className="color-b5">Followers</div>
                    </div>

                    <div className="f-right c-pointer">
                      <div className="color-555">0</div>
                      <div className="color-b5">Following</div>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Segment circular style={square}>
                    <Header as='h2' className="color-b5">Profile Picture</Header>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className="cardboard-wrapper">
            <div className="item-0">
              <div className="link-image-wrapper">
                <div className="create-link-btn p0 c-pointer">
                  <div className="card-0" onClick={this.handleOpen}>
                    <div className="plus-btn">
                      <Button circular icon='plus' color="red" />
                    </div>
                  </div>
                  <div className="p-top-bottom-12">
                    <div className="color-b5 align-left f-size-21">Create Image</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <GridImage images={images} />
        <CreateImageModal modalOpen={this.state.modalOpen} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default Profile;