import * as reducerType from '../../unit/reducerType';

const initState = true;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case reducerType.KEY_PAUSE:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
