import { combineReducers } from 'redux';
import apod from './apod';

const rootReducer = combineReducers({
  apod,
});

export default rootReducer;
