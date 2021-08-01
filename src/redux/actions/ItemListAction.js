import {api} from '../utils/config';
import * as types from '../utils/types';
import ImageColors from 'react-native-image-colors';

const uri_img =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

export const getItem = () => {
  // redux-thunk returns a function with dispatch
  return (dispatch, getState) => {
    dispatch({type: types.ITEM_LIST_RESET});
    dispatch({type: types.ITEM_LIST_PROCESS});
    api
      .get('item')
      .then(async response => {
        let newArr = [];
        const config = {
          fallback: '#000000',
          quality: 'low',
          pixelSpacing: 5,
          cache: false,
        };

        let item = response?.data?.results;

        for (let i = 0; i <= item?.length; i++) {
          const colors = await ImageColors.getColors(
            `${uri_img}${item[0]?.name}.png`,
            config,
          );
          let obj = {
            name: item[i]?.name,
            url: item[i]?.url,
            image: `${uri_img}${item[i]?.name}.png`,
            hex_color: colors?.dominant,
          };
          await newArr?.push(obj);
        }

        dispatch({
          type: types.ITEM_LIST_SUCCESS,
          payload: newArr?.filter(item => item.name !== undefined),
        });
      })
      .catch(error => dispatch({type: types.ITEM_LIST_FAIL, payload: error}));
  };
};
