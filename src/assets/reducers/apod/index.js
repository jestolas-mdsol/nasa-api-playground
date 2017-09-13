import typeToReducer from 'type-to-reducer';
import { UPDATE_APOD } from '../../actions/apod/constants';

const initialAPODState = {
  appBackground: 'http://imageshack.com/a/img923/4467/GEWqeQ.jpg',
  image: '',
};

export default typeToReducer({
  [UPDATE_APOD]: {
    PENDING: () => {
      return {
        ...initialAPODState,
        isPending: true
      }
    },
    REJECTED: (state, action) => {
      return {
        ...initialAPODState,
        error: true
      }
    },
    FULFILLED: (state, action) => {
      const {image, title, description} = action.payload;

      return {
        ...initialAPODState,
        isFulfilled: true,
        image,
        title,
        description,
      }
    }
  },
}, initialAPODState);
