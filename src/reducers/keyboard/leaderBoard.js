import * as reducerType from '../../unit/reducerType';

const initState = false;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case reducerType.LEADER_BOARD:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
