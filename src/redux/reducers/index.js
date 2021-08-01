import {combineReducers} from 'redux';

import PokemonListReducer from './PokemonListReducer';
import DetailPokemonReducer from './DetailPokemonReducer';
import ItemListReducer from './ItemListReducer';
import DetailItemReducer from './DetailItemReducer';

export default combineReducers({
  pokemonListReducer: PokemonListReducer,
  detailPokemonReducer: DetailPokemonReducer,
  itemListReducer: ItemListReducer,
  detailItemReducer: DetailItemReducer,
});
