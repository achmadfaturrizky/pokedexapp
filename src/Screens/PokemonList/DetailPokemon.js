import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import logo from '../../../assets/images/logo-pokemon.png';
import {Bold, SemiBold} from '../../../utils/fonts';
import Icon from 'react-native-vector-icons/AntDesign';

import {useDispatch, useSelector} from 'react-redux';

const DetailPokemon = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrowleft" size={20} />
        <Icon name="hearto" size={20} />
      </View>
      <View style={styles.upperContent}>
        <View>
          <Text style={styles.title}>Bulbasaur</Text>
          <Text style={styles.type}>Grass</Text>
        </View>
        <Text style={styles.order}>#001</Text>
      </View>
      <Image
        style={styles.imagePokemon}
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        }}
      />
      <View style={styles.content}>
        <Text>About</Text>
      </View>
    </View>
  );
};

export default DetailPokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperContent: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: Bold,
    fontSize: 20,
  },
  order: {
    fontFamily: Bold,
    fontSize: 15,
  },
  type: {
    fontFamily: SemiBold,
    backgroundColor: 'rgba(0,0,0,0.2)',
    textAlign: 'center',
    borderRadius: 20,
    maxWidth: 100,
  },
  imagePokemon: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  content: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
});
