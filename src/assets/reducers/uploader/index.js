import typeToReducer from 'type-to-reducer';
import { UPDATE_UPLOADER } from '../../actions/uploader/constants';

const uploaderState = {
  foo: 'foo bar baz',
};

export default typeToReducer({
  [UPDATE_UPLOADER]: {
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
        ...action.payload,
      };
    },
  },
}, uploaderState);
