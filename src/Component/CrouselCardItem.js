import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <ImageBackground source={item.imgUrl} style={styles.image}>
        <View style={{backgroundColor: '#000', width: windowWidth / 4}}>
          <Text style={styles.header}>{item.Date}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingBottom: 40,
    padding: 20,
  },
  image: {
    width: windowWidth / 1.25,
    height: windowWidth / 1.8,
    paddingTop: 30,
  },
  header: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
