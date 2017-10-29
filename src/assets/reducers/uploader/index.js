import typeToReducer from 'type-to-reducer';

import { UPDATE_IMAGE_URLS, UPDATE_REQUEST_DATE } from '../../actions/uploader/constants';
import { setDate } from '../../helpers';

const uploaderState = {
  foo: 'bar baz',
  apiRequestDate: '2015/09/01',
  datePickerMinDate: setDate('min'),
  datePickerMaxDate: setDate(),
  imageUrls: [],
  imageUrlsCount: 0,
};

export default typeToReducer({
  [UPDATE_IMAGE_URLS]: {
    PENDING: () => ({
      ...uploaderState,
      isPending: true,
    }),
    REJECTED: () => ({
      ...uploaderState,
      error: true,
    }),
    FULFILLED: (state, action) => ({
      ...uploaderState,
      imageUrls: action.payload,
    }),
  },
  [UPDATE_REQUEST_DATE]: {
    PENDING: () => ({
      ...uploaderState,
      isPending: true,
    }),
    REJECTED: () => ({
      ...uploaderState,
      error: true,
    }),
    FULFILLED: (state, action) => ({
      ...uploaderState,
      apiRequestDate: action.payload,
    }),
  },
}, uploaderState);
