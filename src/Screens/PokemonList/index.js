import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import logo from '../../../assets/images/logo-pokemon.png';
import {Bold, ExtraBold, Light, Regular, SemiBold} from '../../../utils/fonts';
import Icon from 'react-native-vector-icons/AntDesign';

const menu = [
  {
    id: 1,
    title: 'Pokedex',
    hex_color: '#62d5b4',
  },
  {
    id: 2,
    title: 'Items',
    hex_color: '#f6bd20',
  },
];

const PokemonList = props => {
  const renderPokemon = ({item}) => (
    <TouchableOpacity
      key={item?.id}
      style={styles.menuContent(item?.hex_color)}>
      <Text style={styles.titleMenu}>{item?.title}</Text>
      <Image source={logo} style={styles.logoMenu} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon name="arrowleft" size={30} />
          </TouchableOpacity>

          <Text style={styles.title}>Pokédex</Text>
        </View>
        <Image source={logo} style={styles.logo} />
      </View>

      <FlatList
        numColumns={2}
        data={menu}
        keyExtractor={item => item?.id?.toString()}
        renderItem={renderPokemon}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={styles.menuContainer}
      />
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontFamily: Bold,
    color: '#484848',
  },
  contentHeader: {
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
    paddingHorizontal: 20,
    alignSelf: 'center',
    paddingVertical: 20,
    marginTop: 20,
    width: '100%',
  },
  menuContent: color => ({
    backgroundColor: color,
    width: '47%',
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
    marginHorizontal: 5,
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
