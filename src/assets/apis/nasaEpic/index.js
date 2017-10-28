import axios from 'axios';

import { formatDate } from '../../helpers';
import { UPDATE_UPLOADER } from '../../actions/uploader/constants';

// const API_KEY = process.env.API_KEY;

export const getEPICData = (date) => {
  const formattedDate = formatDate(date, 'YYYY-MM-DD');
  return axios.get(`https://epic.gsfc.nasa.gov/api/enhanced/date/${formattedDate}`)
    .then(res => (res.data));
};


// export const getEPICImages = (fileNames, date) => {
//   // guard: images must be an array of strings
//   const formattedDate = formatDate(date, 'YYYY/MM/DD');
//
//   const imageUrls = fileNames.map(fileName => (`https://epic.gsfc.nasa.gov/archive/enhanced/${formattedDate}/png/${fileName}.png`));
//   updateUploaderImageUrls(imageUrls);
// };

export default {
  getEPICData,
};
