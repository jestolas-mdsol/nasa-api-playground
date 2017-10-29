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

export const setDate = (type) => {
  const date = new Date();

  if (type === 'min') {
    date.setFullYear('2015', '09', '01');
  } else {
    date.setDate(date.getDate() - 2);
  }

  return date;
};

export default {
  formatDate,
  extractImageNames,
  setDate,
};
