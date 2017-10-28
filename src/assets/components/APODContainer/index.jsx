import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Iframe from 'react-iframe';
import { connect } from 'react-redux';

import { getAPOD } from '../../apis/apod';
import { updateAPODAsync } from '../../actions/apod/async';

import APODCard from './apodCard';

class APODContainer extends Component {
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
      <div>
        <div className="apod__wrapper">
          {
            !this.props.astronomyPictureOfTheDay ?
              null :
              <APODCard
                astronomyPictureOfTheDay={this.props.astronomyPictureOfTheDay}
                apodTitle={this.props.apodTitle}
                apodDescription={this.props.apodDescription}
              />
          }
        </div>
        <h2>Click the button to get NASA&apos;s Astronomy Picture Of The Day!</h2>
        <RaisedButton
          className="submit-button--default"
          label="Get APOD!"
          primary
          onTouchTap={this.getAstronomyPicOfTheDay}
        />
      </div>
    );
  }
}

APODContainer.propTypes = {
  astronomyPictureOfTheDay: PropTypes.string.isRequired,
  apodTitle: PropTypes.string.isRequired,
  apodDescription: PropTypes.string.isRequired,
  updateAPODAsync: PropTypes.func.isRequired,
};

const states = state => ({
  astronomyPictureOfTheDay: state.apod.image,
  apodTitle: state.apod.title,
  apodDescription: state.apod.description,
});

const dispatches = dispatch => ({
  updateAPODAsync: (data) => { dispatch(updateAPODAsync(data)); },
});

export default connect(states, dispatches)(APODContainer);
