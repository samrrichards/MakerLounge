"use strict";

import React, {Component} from 'react';
import FbSignin from './fb_signin';
import { GoogleLogin } from 'react-google-login-component';

export default class GoogleSignin extends Component {
  constructor(props){
    super(props);
    this.state = {
      googleFirstName: null,
      googleToken: null
    };
    this.googleSignin = this.googleSignin.bind(this);
    this.googleSignout = this.googleSignout.bind(this);
  }

  googleSignin(googleUser){
    let userProfile = googleUser.getBasicProfile();
    console.log("getBasicProfle function: ", googleUser.getBasicProfile);
    console.log(googleUser.wc);
    console.log("userProfile:", userProfile);

    this.setState({
      googleFirstName: "Sam",
      googleToken: googleUser.getAuthResponse().id_token
    });
    console.log(this.state);
  }

  googleSignout(googleUser){
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      window.location = '/';
    });
  }

  render() {
    if (this.state.googleToken !== null) {
      return (
        <div>
          <div>
            <h3>{"Good to see you, " + this.state.googleFirstName + "!"}</h3>
          </div>
          <FbSignin />
          <div>
            <button onClick={this.googleSignout}>{"Google Sign Out"}</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h3>Sign in using Gmail!</h3>
          </div>
          <div>
          <GoogleLogin
            socialId="763538135967-gcrh154tcddj1nhgka84t1qsp0228627.apps.googleusercontent.com"
            className="google-login"
            scope="email profile"
            responseHandler={this.googleSignin}
            buttonText="Google Sign In"
          />
         </div>
        </div>
      );
    }
  }
}
