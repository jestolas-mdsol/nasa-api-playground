import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import { Helmet } from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';

import TopNav from '../TopNav';
import Footer from '../../components/Footer';
import styles from '../../stylesheets/app.css';

const faviconPath = require('../../images/favicon-32x32.png');

export class App extends Component {
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
        <div className={styles.mainContainer} style={{ backgroundImage: `url('${this.props.appBackground}')` }} >
          <Helmet>
            <link rel="icon" href={faviconPath} type="image/x-icon" />
          </Helmet>
          <Row>
            <Col xs={12} style={{ padding: '0px' }}>
              <TopNav />
            </Col>
          </Row>
          <Row style={{ height: '100vh' }}>
            <Col xs={12} style={{ padding: '0px' }}>
              { React.Children.map(this.props.children, child => React.cloneElement(child)) }
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{ padding: '0px' }}>
              <Footer />
            </Col>
          </Row>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  appBackground: PropTypes.string,
}

const state = state => ({
  appBackground: state.apod.appBackground,
});

export default connect(state)(App);
