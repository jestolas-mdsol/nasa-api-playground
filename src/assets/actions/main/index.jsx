import { UPDATE_APOD, UPDATE_TEST } from '../constants';

const updateTest = () => ({
  type: UPDATE_TEST,
  payload: new Promise((resolve) => {
    resolve('HUZZAH!!!');
  }),
});

export const updateTestAsync = () => {
  return (dispatch) => {
    return dispatch(updateTest()).then((value, action) => {
      console.log('post-dispatch value: ', value);
      console.log('post-dispatch action: ', action.type);
    })
  }
}

export default {}
