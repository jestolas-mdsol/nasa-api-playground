import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Iframe from 'react-iframe';
import { connect } from 'react-redux';

import { getAPOD } from '../../apis/apod';
import { updateAPODAsync } from '../../actions/apod/async';

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
      <div className="landing__container">
        <div className="heading__wrapper">
          <h1>JV&apos;s NASA API Playground</h1>
          <h2>A test environment for another project...</h2>
        </div>
        <div className="apod__wrapper">
          {
            !this.props.astronomyPictureOfTheDay ?
              null :
              <Card className="apod__card">
                <CardMedia
                  overlay={<CardTitle title={this.props.apodTitle} />}
                >
                  {
                    this.props.astronomyPictureOfTheDay.includes('.youtube') ?
                      <Iframe
                        className="iframe"
                        url={this.props.astronomyPictureOfTheDay}
                        position="relative"
                        width="560px"
                        height="315px"
                      /> :
                      <img src={this.props.astronomyPictureOfTheDay} alt="Astronomy" />
                  }
                </CardMedia>
                <CardText>{this.props.apodDescription}</CardText>
              </Card>
          }
        </div>
        <h2>Click the button to get NASA&apos;s Astronomy Picture Of The Day!</h2>
        <RaisedButton
          className="submit--button"
          label="Get APOD!"
          primary
          onTouchTap={this.getAstronomyPicOfTheDay}
        />
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
