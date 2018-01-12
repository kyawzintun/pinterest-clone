import React, { Component } from 'react';
import { Container, Grid, Segment, Header, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import store from 'store';
import { ToastContainer, toast } from 'react-toastify';

import NavBar from "../navbar/navbar";
import GridImage from '../wall/grid';
import CreateImageModal from '../modal/create-image-modal';
import isLoggedIn from '../helper/isLoggedIn';
import "./board.css";

const baseUrl = process.env.REACT_APP_API_URL;
const square = { width: 175, height: 175 }
const user = store.get('user') || {};

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
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
      url: `${baseUrl}image/${user.id}/get`
    }).then(function (res) {
      _this.setState({ loading: false, images: res.data });
      console.log('image get success ', res);
    }).catch(err => {
      _this.setState({ loading: false, images: [] });
      console.log('image get error ', err.response);
    })
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleStateChange = (newImage) => {
    const newImages = this.state.images;
    newImages.unshift(newImage);
    this.setState({ images: newImages})
    toast.success("New image is successfully created.")
  }

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
                  <Header as='h2' className="user-name color-555">{user.name}</Header>
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
        <GridImage images={this.state.images} />
        <CreateImageModal modalOpen={this.state.modalOpen} handleClose={this.handleClose} handleStateChange={this.handleStateChange} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover />
      </div>
    );
  }
}

export default Profile;