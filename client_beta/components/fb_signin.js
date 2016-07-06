"use strict"; 

import React, {Component} from 'react';
import Content from './content';
import FacebookLogin from 'react-facebook-login';

export default class FbSignin extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
    this.FbSignin = this.FbSignin.bind(this);
    this.FbSignout = this.FbSignout.bind(this);
  }

  FbSignin(){
    const that = this;
    FB.getLoginStatus(function(response) {
      console.log(response);
      if (response.status ==='connected'){
        that.setState({loggedIn:true});
      }
    });
  }

  FbSignout(){
    this.setState({loggedIn:false});
  }

  render(){
    if (this.state.loggedIn) {
      return(
        <div>
          <Content />
          <button onClick={this.FbSignout}>Facebook Sign Out</button>
        </div>
      );
    } else {
      return (
        <FacebookLogin
          appId="870722419704419"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.FbSignin} />
      );
    }
  }
}
