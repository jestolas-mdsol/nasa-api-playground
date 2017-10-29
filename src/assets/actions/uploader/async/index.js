import { UPDATE_IMAGE_URLS, UPDATE_REQUEST_DATE } from '../constants';
import { getEPICData } from '../../../apis/nasaEpic';

export const updateUploader = (data) => {
  return (dispatch) => {
    const payload = {
      type: UPDATE_IMAGE_URLS,
      payload: new Promise((resolve) => {
        resolve({
          foo: 'bar',
        });
      }),
    };

    dispatch(payload);
  };
};

export const enableLoadingAnimation = () => {
  // #stuff;
};

// #dispatch this:
export const updateImageUrls = imageUrls => (
  (dispatch) => {
    const payload = {
      type: UPDATE_IMAGE_URLS,
      payload: new Promise(resolve => (resolve(imageUrls))),
    };

    dispatch(payload);
  }
);

export const updateRequestDate = date => (
  (dispatch) => {
    const payload = {
      type: UPDATE_REQUEST_DATE,
      payload: new Promise(resolve => (resolve(date))),
    };

    dispatch(payload);
  }
);

export default {
  updateUploader,
  enableLoadingAnimation,
  updateImageUrls,
};
