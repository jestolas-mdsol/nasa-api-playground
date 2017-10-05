import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import TopNav from '../TopNav';
import Footer from '../../components/Footer';

const faviconPath = require('../../images/favicon-32x32.png');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
    };
  }

  componentWillMount() {
    // Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941
    injectTapEventPlugin();
  }


  render() {
    return (
      <MuiThemeProvider>
        <div id="app__container">
          <Helmet>
            <link rel="icon" href={faviconPath} type="image/x-icon" />
          </Helmet>
          <TopNav />
          { React.Children.map(this.props.children, child => React.cloneElement(child)) }
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
