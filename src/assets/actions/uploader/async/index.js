import { UPDATE_UPLOADER } from '../constants';
import { getEPICData } from '../../../apis/nasaEpic';
import { extractImageNames, formatDate } from '../../../helpers';

export const updateUploader = (data) => {
  return (dispatch) => {
    const payload = {
      type: UPDATE_UPLOADER,
      payload: new Promise((resolve) => {
        resolve({
          foo: 'bar',
        });
      }),
    };

    dispatch(payload);
  };
};

const updateUploaderImageUrls = imageUrls => (
  (dispatch) => {
    const payload = {
      type: UPDATE_UPLOADER,
      payload: new Promise(resolve => (resolve({ imageUrls }))),
    };

    dispatch(payload).then((value, action) => {
      console.log('the uploaderState was updated: ', value, action);
    });
  }
);

const populateImageUrls = (fileNames, date) => {
  const formattedDate = formatDate(date, 'YYYY/MM/DD');

  const imageUrls = fileNames.map(fileName => (`https://epic.gsfc.nasa.gov/archive/enhanced/${formattedDate}/png/${fileName}.png`));
  return updateUploaderImageUrls(imageUrls);
};

export const fetchEpicImages = (date) => {
  // need spiner while data is fetched
  getEPICData(date)
    .then((data) => {
      // guard, data must be an array
      const fileNames = extractImageNames(data);
      console.log('image names: ', fileNames);
      // const formattedImageObjects = formatEPICRequestObject(fileNames, date);
      // console.log('prepared request objects: ', formattedImageObjects);

      const imageUrls = populateImageUrls(fileNames, date);
      console.log('image urls: ', imageUrls);
      // console.log('we ballin\'', imageUrls);
      // dispatch to update state
    })
    .catch((err) => {
      console.log('an error occured with NASA\'s EPIC API: ', err);
      // note: make a visual hint in case of erroor
      return err;
    });
};

export default {
  updateUploader,
  fetchEpicImages,
};
