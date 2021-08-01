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

import {getItem} from '../../redux/actions/ItemListAction';
import {getDetailPokemon} from '../../redux/actions/DetailPokemonAction';

const ItemList = props => {
  const dispatch = useDispatch();

  const {itemlist, loading} = useSelector(state => state.itemListReducer);

  useEffect(() => {
    dispatch(getItem());
  }, []);

  const handleDetail = async id => {
    await dispatch(getDetailPokemon(id));
    await props.navigation.navigate('DetailPokemon');
  };

  const renderPokemon = ({item, index}) => (
    <TouchableOpacity
      onPress={() => handleDetail(item?.name)}
      style={styles.menuContent(item?.hex_color ? item?.hex_color : '#000')}>
      <Text numberOfLines={1} style={styles.titleMenu}>
        {item?.name}
      </Text>
      <Image source={{uri: item?.image}} style={styles.imagePokedex} />
      <Image source={logo} style={styles.logoMenu} />
    </TouchableOpacity>
  );

  console.log('dfdfdf', itemlist);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon name="arrowleft" size={30} />
          </TouchableOpacity>

          <Text style={styles.title}>Items</Text>
        </View>
        <Image source={logo} style={styles.logo} />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={itemlist}
        keyExtractor={(item, i) => i.toString()}
        renderItem={renderPokemon}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: 10,
        }}
        contentContainerStyle={styles.menuContainer}
      />
    </View>
  );
};

export default ItemList;

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
    paddingLeft: 10,
    marginHorizontal: 5,
    justifyContent: 'space-between',
  }),
  logoMenu: {
    position: 'absolute',
    right: -50,
    tintColor: 'rgba(255,255,255,0.1)',
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  titleMenu: {
    fontFamily: SemiBold,
    color: '#fff',
    textTransform: 'capitalize',
    flex: 1,
    maxWidth: 150,
  },
  imagePokedex: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    flex: 1,
  },
});
