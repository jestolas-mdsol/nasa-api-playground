import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuIcon from 'material-ui/svg-icons/navigation/more-horiz'
import { compose, withState, withHandlers, setDisplayName, componentFromProp, lifecycle, withProps } from 'recompose';

const enhance = compose(
  setDisplayName('LeftNav'),
  withState(),
  withHandlers({
    onWIPClick: () => {
      alert('work in progress');
    },
  }),
  lifecycle({
    componentWillMount() {
      console.log('leftnav -- willmount!');
    },
  }),
);

const LeftNav = (props) => (
  <div>
    <AppBar
      className="app__navbar"
      title="LeftNav"
      iconElementLeft={
        <IconButton>
          <MenuIcon onClick={props.onWIPClick} />
        </IconButton>
      }
      iconClassNameRight="app__navbar--login-register"
      iconElementRight={
        <FlatButton
          label="Login/Register"
          onClick={props.onWIPClick}
        />
      }
    />
  </div>
);

export default enhance(LeftNav);
