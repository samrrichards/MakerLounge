"use strict";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleSignin from './components/google_signin';

require(__dirname + "/css/style.css");

ReactDOM.render(
  <GoogleSignin />,
  document.getElementById('app')
);
