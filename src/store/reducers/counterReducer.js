import ActionTypes from '../actions/actions';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return state;
    case ActionTypes.DECREASE_COUNT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
