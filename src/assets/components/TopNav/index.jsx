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
);

const TopNav = () => (
  <div>
    <NavBar />
  </div>
);

export default enhance(TopNav);
