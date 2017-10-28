import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import { fetchEpicImageUrls, updateImageUrls } from '../../actions/uploader/async';

import ImagePreviews from './imagePreviews';

class Uploader extends Component {
  constructor(props) {
    super(props);

    this.handleCreateGifClick = this.handleCreateGifClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(nullEvent, date) {
    console.log('date changed to: ', date);
  }

  handleCreateGifClick() {
    fetchEpicImageUrls('10/09/2017').then((data) => {
      this.props.updateImageUrls(data);
    });
  }

  render() {
    return (
      <div className="uploader__containe">
        <h1>Foo: {this.props.foo}</h1>
        <h2>Pick a date</h2>
        <DatePicker
          hintText="Click To Select Date"
          style={{ color: 'green' }}
          onChange={this.handleDateChange}
          openToYearSelection
        />
        <RaisedButton
          className="submit-button--default"
          label="Create Gif"
          onClick={this.handleCreateGifClick}
        />
        <ImagePreviews />
      </div>
    );
  }
}

Uploader.propTypes = {
  foo: PropTypes.string.isRequired,
  updateImageUrls: PropTypes.func.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const states = state => ({
  foo: state.uploader.foo,
  imageUrls: state.uploader.imageUrls,
});

const dispatches = dispatch => ({
  updateImageUrls: data => (dispatch(updateImageUrls(data))),
});

export default connect(states, dispatches)(Uploader);
