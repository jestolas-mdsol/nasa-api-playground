import { format } from 'date-fns';

export const formatDate = (date, formatString) => {
  // guard, date must be a date format
  // fomratString must be a string following a specific format
  return format(date, formatString);
};

export const extractImageNames = (data) => {
  // guard, data must be an array (of )
  return data.reduce((acc, current) => {
    acc.push(current.image);
    return acc;
  }, []);
};

// export const formatEPICRequestObject = (imageNames, date) => {
//
// }

export default {
  formatDate,
  extractImageNames,
};
