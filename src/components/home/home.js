import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import "./home.css";
import logo from "../../assets/images/logo.svg"

class Home extends Component {
  state = {  }
  render() {
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
                  <img src= {logo} />
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
                    <p class="p-or">OR</p>
                    <div className="div-id-8">
                      <Button color='facebook' fluid>
                        <Icon name='facebook' /> Continue with Facebook
                      </Button>
                      <Button color='google plus' fluid>
                        <Icon name='google' /> Continue with Google
                      </Button>
                    </div>
                    <div className="div-id-9">
                      <span className="span-id-1">
                        <span>By continuing, you agree to Pinterest's  
                          <a href="#" target="_blank"> Terms of Service</a>, 
                          <a href="#" target="_blank"> Privacy Policy</a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;