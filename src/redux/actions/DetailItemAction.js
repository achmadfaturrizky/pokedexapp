import {api} from '../utils/config';
import * as types from '../utils/types';
import ImageColors from 'react-native-image-colors';

const uri_img =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

const config = {
  fallback: '#000000',
  quality: 'low',
  pixelSpacing: 5,
  cache: false,
};

export const getDetailItem = id => {
  // redux-thunk returns a function with dispatch
  return (dispatch, getState) => {
    dispatch({type: types.DETAIL_ITEM_RESET});
    dispatch({type: types.DETAIL_ITEM_PROCESS});
    api
      .get(`item/${id}`)
      .then(async res => {
        const colors = await ImageColors.getColors(
          `${uri_img}${res?.data?.name}.png`,
          config,
        );

        let newObj = {
          attributes: res?.data?.attributes,
          category: res?.data?.category,
          cost: res?.data?.cost,
          effect_entries: res?.data?.effect_entries,
          flavor_text_entries: res?.data?.flavor_text_entries,
          id: res?.data?.id,
          name: res?.data?.name,
          sprites: res?.data?.sprites,
          hex_color: colors?.dominant,
        };
        dispatch({
          type: types.DETAIL_ITEM_SUCCESS,
          payload: newObj,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({type: types.DETAIL_ITEM_FAIL, payload: error});
      });
  };
};
