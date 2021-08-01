import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import logo from '../../../assets/images/logo-pokemon.png';
import {Bold, SemiBold} from '../../../utils/fonts';

const menu = [
  {
    id: 1,
    title: 'Pokedex',
    hex_color: '#62d5b4',
    navigate: 'PokemonList',
  },
  {
    id: 2,
    title: 'Items',
    hex_color: '#f6bd20',
    navigate: 'ItemList',
  },
];

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>What Pokémon are you looking for?</Text>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.menuContainer}>
        {menu.map(item => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate(item?.navigate)}
            key={item?.id}
            style={styles.menuContent(item?.hex_color)}>
            <Text style={styles.titleMenu}>{item?.title}</Text>
            <Image source={logo} style={styles.logoMenu} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontFamily: Bold,
    color: '#484848',
    width: '65%',
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingLeft: 20,
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    tintColor: '#f7f8fa',
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
    width: '100%',
    height: '15%',
  },
  menuContent: color => ({
    backgroundColor: color,
    width: '48%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 20,
  }),
  logoMenu: {
    position: 'absolute',
    right: -50,
    tintColor: 'rgba(255,255,255,0.5)',
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  titleMenu: {
    fontFamily: SemiBold,
    color: '#fff',
  },
});
