import { combineReducers } from 'redux';

import apod from './apod';
import uploader from './uploader';

const rootReducer = combineReducers({
  apod,
  uploader,
});

export default rootReducer;
