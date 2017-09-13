import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import RaisedButton from 'material-ui/RaisedButton';
import Iframe from 'react-iframe';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { connect } from 'react-redux';

import { getAPOD } from '../../apis/apod';
import { updateAPODAsync } from '../../actions/apod/async';
import styles from '../../stylesheets/landing.css';

const inline = {
  iframe: {
    margin: '0 auto',
  },
  apodCard: {
    backgroundColor: '#000000',
  }
}

class Landing extends Component {
  constructor(props) {
    super(props);

    this.getAstronomyPicOfTheDay = this.getAstronomyPicOfTheDay.bind(this);
  }

  getAstronomyPicOfTheDay() {
    getAPOD().then((res) => {
      this.props.updateAPODAsync(res.data);
    });
  }

  render() {
    return (
      <div className={styles.landingDefault}>
        <Row style={{ padding: '0px' }}>
          <Col xs={12}>
            <h1 className={styles.headerCenter}>JV&apos;s NASA Api Playground</h1>
            <h4 className={styles.subheaderCenter}>A precedent for another project...</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {
              !this.props.astronomyPictureOfTheDay ? null :
                <Card style={inline.apodCard}>
                  <CardMedia
                    overlay={<CardTitle title={this.props.apodTitle} />}
                  >
                    {
                      this.props.astronomyPictureOfTheDay.includes('.youtube') ?
                        <Iframe
                          url={this.props.astronomyPictureOfTheDay}
                          position="relative"
                          width="560px"
                          height="315px"
                          styles={inline.iframe}
                        /> :
                        <img src={this.props.astronomyPictureOfTheDay} alt="Astronomy" />
                    }
                  </CardMedia>
                  <CardText>{this.props.apodDescription}</CardText>
                </Card>
            }
          </Col>
        </Row>
        <Row>
          <Col xs={12} className={styles.textCentered}>
            Click the button to get NASA&apos;s Astronomy Picture Of The Day!
          </Col>
        </Row>
        <Row className={styles.rowPadded}>
          <Col xsOffset={5} xs={2}>
            <RaisedButton
              label="Get APOD!"
              primary
              fullWidth
              onTouchTap={this.getAstronomyPicOfTheDay}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

Landing.defaultProps = {
  astronomyPictureOfTheDay: '',
  apodTitle: '',
  apodDescription: '',
};

Landing.propTypes = {
  astronomyPictureOfTheDay: PropTypes.string,
  apodTitle: PropTypes.string,
  apodDescription: PropTypes.string,
  updateAPODAsync: PropTypes.func,
};

const states = state => ({
  astronomyPictureOfTheDay: state.apod.image,
  apodTitle: state.apod.title,
  apodDescription: state.apod.description,
});

const dispatches = dispatch => ({
  updateAPODAsync: (data) => { dispatch(updateAPODAsync(data)); },
});

export default connect(states, dispatches)(Landing);
