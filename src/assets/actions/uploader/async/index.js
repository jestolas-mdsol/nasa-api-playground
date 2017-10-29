import { UPDATE_IMAGE_URLS } from '../constants';
import { getEPICData } from '../../../apis/nasaEpic';
import { extractImageNames, formatDate } from '../../../helpers';

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

// #trigger , may need to move this
export const fetchEpicImageUrls = (date) => {
  // need spiner while data is fetched
  return getEPICData(date).then((data) => {
    // guard, data must be an array
    const fileNames = extractImageNames(data);
    const formattedDate = formatDate(date, 'YYYY/MM/DD');
    return fileNames.map(fileName => (`https://epic.gsfc.nasa.gov/archive/enhanced/${formattedDate}/png/${fileName}.png`));

  }).catch((err) => {
    console.log('an error occured with NASA\'s EPIC API: ', err);
    // note: make a visual hint in case of erroor
    return err;
  });
};

export default {
  updateUploader,
  enableLoadingAnimation,
  updateImageUrls,
  fetchEpicImageUrls,
};
