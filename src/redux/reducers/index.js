import {combineReducers} from 'redux';

import PokemonListReducer from './PokemonListReducer';
import DetailPokemonReducer from './DetailPokemonReducer';
import ItemListReducer from './ItemListReducer';

export default combineReducers({
  pokemonListReducer: PokemonListReducer,
  detailPokemonReducer: DetailPokemonReducer,
  itemListReducer: ItemListReducer,
});
