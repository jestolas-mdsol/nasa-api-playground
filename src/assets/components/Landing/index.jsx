import React, { Component } from 'react';

import APODContainer from '../APODContainer';
import Uploader from '../Uploader';

export default class Landing extends Component {

  render() {
    return (
      <div className="landing__container">
        <div className="heading__wrapper">
          <h1>Customized NASA API Playground</h1>
          <h2>A test environment for another project...</h2>
        </div>
        <Uploader />
        <APODContainer />
      </div>
    );
  }
}
