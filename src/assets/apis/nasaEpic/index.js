import axios from 'axios';

import { extractImageNames, formatDate } from '../../helpers';

// const API_KEY = process.env.API_KEY;

const generateEPICSnapshotUrl = (date, fileName, type) => (
  type === 'thumbnail' ?
    `https://epic.gsfc.nasa.gov/archive/natural/${date}/thumbs/${fileName}.jpg` :
    `https://epic.gsfc.nasa.gov/archive/natural/${date}/enhanced/${fileName}.png`
);

export const getEPICData = (date) => {
  const formattedDate = formatDate(date, 'YYYY-MM-DD');
  return axios.get(`https://epic.gsfc.nasa.gov/api/natural/date/${formattedDate}`)
    .then(res => (res.data));
};

export const fetchEpicImageUrls = (date) => {
  // need spiner while data is fetched
  return getEPICData(date).then((data) => {
    // guard, data must be an array
    const fileNames = extractImageNames(data);
    // date is pre-formatted when user selects it. this may not be necessary
    const formattedDate = formatDate(date, 'YYYY/MM/DD');
    return fileNames.map(fileName => (generateEPICSnapshotUrl(formattedDate, fileName, 'thumbnail')));
  }).catch((err) => {
    console.log('an error occured with NASA\'s EPIC API: ', err);
    // note: make a visual hint in case of error
    return err;
  });
};

export default {
  getEPICData,
  fetchEpicImageUrls,
};
