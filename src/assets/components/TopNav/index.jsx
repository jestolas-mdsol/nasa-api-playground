import React from 'react';
import { compose, withState, withHandlers, setDisplayName, lifecycle } from 'recompose'

import NavBar from './NavBar';

const enhance = compose(
  setDisplayName('TopNav'),
  withState(
    'clicked',
    'triggerClick',
    false,
  ),
  withHandlers({
    updateClick: ({ triggerClick }) => () => triggerClick(bool => !bool),
    reset: ({ triggerClick }) => () => triggerClick(bool => false),
  }),
  lifecycle({
    componentWillMount() {
      console.log('recompose topnav - willmount - this is a test');
      console.log('props: ', this.props);
    },
    componentDidMount() {
      console.log('didmount - topnav index');
    }
  }),
)

const TopNav = (props) => {
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default enhance(TopNav);
