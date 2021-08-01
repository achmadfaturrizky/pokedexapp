import * as types from '../utils/types';

const INITIAL_STATE = {
  loading: false,
  itemlist: [],
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ITEM_LIST_RESET:
      return INITIAL_STATE;
    case types.ITEM_LIST_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case types.ITEM_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        itemlist: action.payload,
      };
    case types.ITEM_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
