import {combineReducers} from 'redux';

import PokemonListReducer from './PokemonListReducer';
import DetailPokemonReducer from './DetailPokemonReducer';

export default combineReducers({
  pokemonListReducer: PokemonListReducer,
  detailPokemonReducer: DetailPokemonReducer,
});
