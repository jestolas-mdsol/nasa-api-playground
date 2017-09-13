// not really true async...
import { UPDATE_APOD } from '../constants';
// REMINDER: use datefns insead of moment

const updateAPODAsync = (data) => {
  return (dispatch) => {
    const payload = {
      type: UPDATE_APOD,
      payload: new Promise((resolve) => {
        resolve({
          image: data.hdurl || data.url,
          title: data.title,
          description: data.explanation,
        });
      }),
    };

    dispatch(payload).then((value, action) => {
      console.log('update apod value and action: ', value, action);
    });
  };
};

export {
  updateAPODAsync,
};
