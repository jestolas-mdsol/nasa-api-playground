import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import { updateImageUrls, updateRequestDate } from '../../actions/uploader/async';
import { fetchEpicImageUrls } from '../../apis/nasaEpic';
import { formatDate } from '../../helpers';

import ImagePreviews from './imagePreviews';

class Uploader extends Component {
  constructor(props) {
    super(props);

    this.handleCreateGifClick = this.handleCreateGifClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.formatDate = formatDate;
  }

  handleDateChange(nullEvent, date) {
    const formattedDate = this.formatDate(date, 'YYYY/MM/DD');
    this.props.updateRequestDate(formattedDate);
  }

  handleCreateGifClick() {
    fetchEpicImageUrls(this.props.apiRequestDate).then((data) => {
      this.props.updateImageUrls(data);
    });
  }

  render() {
    return (
      <div className="uploader__containe">
        <h1>Foo: {this.props.foo}</h1>
        <h2>Pick a date</h2>
        <DatePicker
          className="date-picker__container"
          hintText="Click To Select Date"
          onChange={this.handleDateChange}
          minDate={this.props.datePickerMinDate}
          maxDate={this.props.datePickerMaxDate}
        />
        <RaisedButton
          className="submit-button--default"
          label="Create Gif"
          onClick={this.handleCreateGifClick}
        />
        <ImagePreviews
          imageUrls={this.props.imageUrls}
        />
      </div>
    );
  }
}

Uploader.propTypes = {
  foo: PropTypes.string.isRequired,
  updateImageUrls: PropTypes.func.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  apiRequestDate: PropTypes.string.isRequired,
  updateRequestDate: PropTypes.func.isRequired,
  datePickerMinDate: PropTypes.instanceOf(Date).isRequired,
  datePickerMaxDate: PropTypes.instanceOf(Date).isRequired,
};

const states = state => ({
  foo: state.uploader.foo,
  imageUrls: state.uploader.imageUrls,
  apiRequestDate: state.uploader.apiRequestDate,
  datePickerMinDate: state.uploader.datePickerMinDate,
  datePickerMaxDate: state.uploader.datePickerMaxDate,
});

const dispatches = dispatch => ({
  updateImageUrls: data => (dispatch(updateImageUrls(data))),
  updateRequestDate: data => (dispatch(updateRequestDate(data))),
});

export default connect(states, dispatches)(Uploader);
