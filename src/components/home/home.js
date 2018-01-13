import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Button, Label } from 'semantic-ui-react';
import isLoggedIn from '../helper/isLoggedIn';
import FacebookButton from "../button/fb-button";
// import GoogleButton from "../button/google-button";
import logo from "../../assets/images/logo.svg"
import "./home.css";

class Home extends Component {
  render() {
    if (isLoggedIn()) {
      return (<Redirect to="/explore" />);
    }
    return (
      <div className="home-root">
        <div className="bg-image"></div>
        <div className="overlay-div"></div>
        <div>
          <div className="div-id-1">
            <div className="div-id-2"></div>
            <div>
              <div className="div-id-3">
                <div className="div-id-4">
                  <img src= {logo} alt="pinterest logo" />
                </div>
                <div>
                  <div className="div-id-5">Welcome to Pinterest</div>
                </div>
                <div className="div-id-6">
                  <div className="div-id-7">
                    <Form>
                      <Form.Field>
                        <input placeholder='Email' className="_input-2" />
                      </Form.Field>
                      <Form.Field>
                        <input type="password" placeholder='Create a password' className="_input-2" />
                      </Form.Field>
                      <Button color="red" fluid>Continue</Button>
                    </Form>
                    <p className="p-or">OR</p>
                    <div className="div-id-8">
                      <FacebookButton />
                      {/* <GoogleButton /> */}
                    </div>
                    <div className="div-id-9">
                      <span className="span-id-1">
                        <span>By continuing, you agree to Pinterest's  
                          <a href="/#"> Terms of Service</a>, 
                          <a href="/#"> Privacy Policy</a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Label as={Link} to='/explore'>
                <button className="home-button">Home</button>
              </Label>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;