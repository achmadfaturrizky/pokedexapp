import {combineReducers} from 'redux';

import PokemonListReducer from './PokemonListReducer';

export default combineReducers({
  pokemonListReducer: PokemonListReducer,
});
