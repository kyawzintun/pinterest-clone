/*global FB*/
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router'
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import store from 'store';

const baseUrl = process.env.REACT_APP_API_URL;

class FacebookButton extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.createUser = this.createUser.bind(this);
  }

  loadFBLoginApi = () => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '1729399460438553',
        cookie: true,
        xfbml: true,
        version: 'v2.11'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11&appId=1729399460438553';
      fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));
  }

  componentDidMount() {
    this.loadFBLoginApi();
  }

  createUser = (userObj) => {
    const history = this.props.history;
    axios({
      method: 'post',
      url: baseUrl + 'user/create',
      data: userObj
    }).then(function (res) {
      console.log('user create success ', res);
      store.set('user', res.data);
      history.push('/explore');
    }).catch(err => {
      console.log('user create error ', err.response);
    })
  }

  callApi = () => {
    const _this = this;
    FB.api('/me', {
      fields: "id, email, name, picture"
    }, function (res) {
      console.log(res);
      _this.createUser(res);
    });
  }

  statusChangeCallback = (res) => {
    console.log('login status ', res);
    if (res.status === 'connected') {
      this.callApi();
    } else if (res.status === 'not_authorized') {
      console.log('please log into this app');
    } else {
      console.log("please log into this facebook");
    }
  }

  checkLoginState = () => {
    FB.getLoginStatus((res) => {
      this.statusChangeCallback(res);
    })
  }

  handleFBLogin = () => {
    FB.login(this.checkLoginState(), { scope: 'public_profile,email' });
  }

  render() {
    return (
      <Button onClick={this.handleFBLogin} color='facebook' fluid>
        <Icon name='facebook' /> Continue with Facebook
      </Button>
    );
  }
}

export default withRouter(FacebookButton);