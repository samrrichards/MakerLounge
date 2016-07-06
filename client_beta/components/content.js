"use strict"; 

import React, {Component} from 'react';

export default class Content extends Component {
  render() {
    return(
      <div>
        <h2>{"Welcome to MakerLounge!"}</h2>
        <p>{"There's not a whole lot here at the moment. But please do enjoy this tasty Nyan Cat gif."}</p>
        <p>{"It's surfing on a Pop Tart. I've always wanted to surf on a PopTart."}</p>
        <img src={"https://s-media-cache-ak0.pinimg.com/originals/80/db/e7/80dbe7a37ca3ea65ecac8dace1b599cc.gif"} />
      </div>
    );
  }
}
