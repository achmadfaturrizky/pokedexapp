import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Bold, Regular, SemiBold} from '../../../utils/fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {useDispatch, useSelector} from 'react-redux';

const DetailItem = props => {
  const {itemlist, loading} = useSelector(state => state.detailItemReducer);
  return (
    <View
      style={styles.container(
        itemlist?.hex_color ? itemlist?.hex_color : '#fff',
      )}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrowleft" size={20} color="#fff" />
        </TouchableOpacity>
        <Icon name="hearto" size={20} color="#fff" />
      </View>
      <View style={styles.upperContent}>
        <View>
          <Text style={styles.title}>{itemlist?.name}</Text>
          <View style={styles.contentType}>
            <Text style={styles.textType}>{itemlist?.category?.name}</Text>
          </View>
        </View>
        <Text style={styles.order}>#00{itemlist?.id}</Text>
      </View>
      <Image
        style={styles.imagePokemon}
        source={{
          uri: itemlist?.sprites?.default,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.titleAbout}>About</Text>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 300,
          }}>
          <Text>
            {itemlist?.effect_entries
              ? itemlist?.effect_entries[0]?.short_effect
              : '-'}
          </Text>
          <Text style={styles.titleAbilities}>Attributes</Text>
          <View style={styles.contentRow}>
            {itemlist?.attributes?.map(item => (
              <View key={item?.name} style={styles.abilitiesContent}>
                <Text style={styles.textAbilities}>{item?.name}, </Text>
              </View>
            ))}
          </View>
          <Text style={styles.titleAbilities}>Cost</Text>
          <Text style={styles.textAbilities}>{itemlist?.cost}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  container: color => ({
    flex: 1,
    backgroundColor: color,
  }),
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
  },
  title: {
    fontFamily: Bold,
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#fff',
  },
  order: {
    fontFamily: Bold,
    fontSize: 15,
    color: '#fff',
  },
  contentType: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textType: {
    fontFamily: SemiBold,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: '#fff',
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
    backgroundColor: '#fff',
    height: '100%',
    paddingVertical: 20,
  },

  titleAbout: {
    fontFamily: Bold,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  contentHeight: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingVertical: 10,
  },
  titleHeight: {
    fontFamily: SemiBold,
    color: 'grey',
  },
  textHeight: {
    fontFamily: SemiBold,
  },
  titleAbilities: {
    fontFamily: SemiBold,
    marginTop: 10,
  },
  abilitiesContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentRow: {
    flexDirection: 'row',
  },
  textAbilities: {
    fontFamily: Regular,
    fontSize: 12,
    color: 'grey',
  },
  statsContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  titleStats: {
    fontFamily: SemiBold,
    marginTop: 20,
  },
  statText: {
    fontFamily: SemiBold,
    color: 'grey',
    textTransform: 'capitalize',
    flex: 2,
  },
  baseStatText: {
    fontFamily: SemiBold,
    textTransform: 'capitalize',
    color: '#000',
    flex: 1,
    marginLeft: 5,
  },
});
