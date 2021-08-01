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

const DetailPokemon = props => {
  const {pokemon, loading} = useSelector(state => state.detailPokemonReducer);
  return (
    <View
      style={styles.container(
        pokemon?.hex_color ? pokemon?.hex_color : '#fff',
      )}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrowleft" size={20} color="#fff" />
        </TouchableOpacity>
        <Icon name="hearto" size={20} color="#fff" />
      </View>
      <View style={styles.upperContent}>
        <View>
          <Text style={styles.title}>{pokemon?.name}</Text>
          <View style={styles.types}>
            {pokemon?.types?.map(item => (
              <View key={item?.slot} style={styles.contentType}>
                <Text style={styles.textType}>{item?.type?.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={styles.order}>#00{pokemon?.id}</Text>
      </View>
      <Image
        style={styles.imagePokemon}
        source={{
          uri: pokemon?.image_url,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.titleAbout}>About</Text>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 300,
          }}>
          <Text style={styles.titleAbilities}>Abilities</Text>
          <View style={styles.contentRow}>
            {pokemon?.abilities?.map(item => (
              <View key={item?.slot} style={styles.abilitiesContent}>
                <Text style={styles.textAbilities}>
                  {item?.ability?.name},{' '}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.contentHeight}>
            <View>
              <Text style={styles.titleHeight}>Height</Text>
              <Text style={styles.textHeight}>{pokemon?.height} Dm</Text>
            </View>
            <View>
              <Text style={styles.titleHeight}>Weight</Text>
              <Text style={styles.textHeight}>{pokemon?.weight} Hg</Text>
            </View>
          </View>
          <Text style={styles.titleStats}>Base Stats</Text>

          {pokemon?.stats?.map((item, i) => (
            <View key={i} style={styles.statsContent}>
              <Text style={styles.statText}>{item?.stat?.name}</Text>
              <Text style={styles.baseStatText}>{item?.base_stat}</Text>
              <ProgressBar
                styleAttr="Horizontal"
                indeterminate={false}
                progress={item?.base_stat / 100}
                style={{
                  flex: 3,
                  color: item?.base_stat < 50 ? '#EA2336' : '#A1DD70',
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailPokemon;

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
    maxWidth: 100,
    paddingHorizontal: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  types: {
    flexDirection: 'row',
    maxWidth: '90%',
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
