import {api} from '../utils/config';
import * as types from '../utils/types';
import ImageColors from 'react-native-image-colors';

const uri_img =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const config = {
  fallback: '#000000',
  quality: 'low',
  pixelSpacing: 5,
  cache: false,
};

export const getDetailPokemon = id => {
  // redux-thunk returns a function with dispatch
  return (dispatch, getState) => {
    dispatch({type: types.DETAIL_POKEMON_RESET});
    dispatch({type: types.DETAIL_POKEMON_PROCESS});
    api
      .get(`pokemon/${id}`)
      .then(async res => {
        const colors = await ImageColors.getColors(
          `${uri_img}${res?.data?.id}.png`,
          config,
        );

        let newObj = {
          id: res?.data?.id,
          types: res?.data?.types,
          name: res?.data?.name,
          order: res?.data?.order,
          image_url: `${uri_img}${res?.data?.id}.png`,
          hex_color: colors?.dominant,
          height: res?.data?.height,
          weight: res?.data?.weight,
          abilities: res?.data?.abilities,
          stats: res?.data?.stats,
        };
        dispatch({
          type: types.DETAIL_POKEMON_SUCCESS,
          payload: newObj,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({type: types.DETAIL_POKEMON_FAIL, payload: error});
      });
  };
};
