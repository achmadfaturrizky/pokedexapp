import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import logo from '../../../assets/images/logo-pokemon.png';
import {Bold, ExtraBold, Light, Regular, SemiBold} from '../../../utils/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Pokédex</Text>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  title: {
    fontSize: 30,
    fontFamily: Bold,
    color: '#484848',
  },
  content: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingVertical: 20,
    paddingLeft: 20,
  },
  logo: {
    tintColor: '#f7f8fa',
    resizeMode: 'contain',
    width: 200,
    height: 200,
    position: 'absolute',
    top: -40,
    right: -40,
  },
});
