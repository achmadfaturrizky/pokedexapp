import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../../../assets/images/logo-pokemon.png';
import {Bold} from '../../../utils/fonts';

const SplashScreen = props => {
  useEffect(() => {
    navigate();
  }, []);

  const navigate = () => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 1000);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Pokédex</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: Bold,
    fontSize: 20,
    color: '#000',
  },
});
