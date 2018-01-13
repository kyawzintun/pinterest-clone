/*global gapi*/
import React, { Component } from 'react';

// const baseUrl = process.env.REACT_APP_API_URL;

class GoogleButton extends Component {

  componentDidMount() {
    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn,
      'onfailure': this.onFailure
    });
  }

  onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    // sessionStorage.setItem('authToken', profile.getId());
    // sessionStorage.setItem('name', profile.getName());
    // sessionStorage.setItem('imageUrl', profile.getImageUrl());
    // sessionStorage.setItem('email', profile.getEmail());

    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }

  onFailure(error) {
    console.log(error);
  }

  render() {
    return (
      <div className="g-signin2" data-width="270" data-onsuccess={this.onSignIn} data-theme="dark"></div>
      // <Button className="g-signin2" color='google plus' fluid data-onsuccess="onSignIn">
      //   <Icon name='google' /> Continue with Google
      // </Button>
    );
  }
}

export default GoogleButton;