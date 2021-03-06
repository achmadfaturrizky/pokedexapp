import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../redux/reducers';

import Splash from '../Screens/Splash';
import HomeScreen from '../Screens/HomeScreen';
import PokemonList from '../Screens/PokemonList';
import DetailPokemon from '../Screens/PokemonList/DetailPokemon';
import ItemList from '../Screens/ItemList';
import DetailItem from '../Screens/ItemList/DetailItem';

const Stack = createStackNavigator();

let store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PokemonList" component={PokemonList} />
          <Stack.Screen name="DetailPokemon" component={DetailPokemon} />
          <Stack.Screen name="ItemList" component={ItemList} />
          <Stack.Screen name="DetailItem" component={DetailItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
