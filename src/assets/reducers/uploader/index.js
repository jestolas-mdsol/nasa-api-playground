import typeToReducer from 'type-to-reducer';
import { UPDATE_IMAGE_URLS } from '../../actions/uploader/constants';

const uploaderState = {
  foo: 'bar baz',
  imageUrls: [],
};

export default typeToReducer({
  [UPDATE_IMAGE_URLS]: {
    PENDING: () => {
      return {
        ...uploaderState,
        isPending: true
      }
    },
    REJECTED: (state, action) => {
      return {
        ...uploaderState,
        error: true
      }
    },
    FULFILLED: (state, action) => {
      return {
        ...uploaderState,
        imageUrls: action.payload,
      };
    },
  },
}, uploaderState);
