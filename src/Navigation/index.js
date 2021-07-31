import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../redux/reducers';

import HomeScreen from '../Screens/HomeScreen';
import PokemonList from '../Screens/PokemonList';

const Stack = createStackNavigator();

let store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PokemonList" component={PokemonList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
