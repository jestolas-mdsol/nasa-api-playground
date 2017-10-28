import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import { updateUploader, fetchEpicImages } from '../../actions/uploader/async';

class Uploader extends Component {
  constructor(props) {
    super(props);

    this.handleCreateGifClick = this.handleCreateGifClick.bind(this);
  }

  handleCreateGifClick() {
    console.log('clickity clack... ');
    fetchEpicImages('10/09/2017');
  }

  render() {
    return (
      <div className="uploader__containe">
        <h1>Test: {this.props.foo}</h1>
        <h2>Pick a start and end date</h2>
        <DatePicker
          hintText="Start date"
          openToYearSelection
        />
        <DatePicker
          hintText="End date"
          openToYearSelection
        />
        <RaisedButton
          className="submit-button--default"
          label="Create Gif"
          onClick={this.handleCreateGifClick}
        />
      </div>
    );
  }
}

Uploader.propTypes = {
  foo: PropTypes.string.isRequired,
};

const states = state => ({
  foo: state.uploader.foo,
});

const dispatches = dispatch => ({
  // actions
});

export default connect(states)(Uploader);
