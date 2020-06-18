import { FEATURE } from './actions';

const initialState = {
  field: 0
};

export default function feature(state = initialState, action) {
  switch (action.type) {
    case FEATURE.ACTION:
      return {
        ...state,
        field: state.field + 1
      };
    default:
      return state;
  }
}
