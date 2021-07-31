import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import PokemonList from '../Screens/PokemonList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PokemonList" component={PokemonList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
