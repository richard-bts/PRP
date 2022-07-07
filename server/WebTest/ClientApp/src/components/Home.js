import React, { Component } from 'react';
import Box from '../assets/images/Box.JPG';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div>
              <center><h1>TEST WEBSITE - Partner Reporting Package</h1>
                  <br />
                  <img src={Box} />
              </center>
          </div>
      );
  }
}
