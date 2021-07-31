import * as types from '../utils/types';

const INITIAL_STATE = {
  loading: false,
  pokemon: [],
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.POKEMON_LIST_RESET:
      return INITIAL_STATE;
    case types.POKEMON_LIST_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case types.POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
    case types.POKEMON_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
