/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useCallback, useEffect} from 'react';
import {
  ScrollView,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';
import Card from '../Component/Card';
import Icon from 'react-native-vector-icons/Entypo';
import Heart from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Notifications = () => {
  
  const [data, setData] = useState([
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
    {
      img: require('../../Assets/background1.png'),
      Description: 'A new post has been added by skypark one.',
      Date: 'September 20, 2021',
    },
  ]);
 
const navigation= useNavigation();
  return (
    <View style={{paddingTop: 20,paddingLeft:20,paddingRight:20,flex:1,  backgroundColor: '#FFf'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arrow name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>

        <Text
          style={{
            color: '#221F1F',
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
          }}>
          Back
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#221F1F',
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
          }}>
          Notifications
        </Text>
      </View>
      <FlatList
        style={{marginBottom: 5}}
        data={data}
        renderItem={({item}) => (
          <View>
            <View style={{padding: 10, flexDirection: 'row'}}>
              <View>
                <Image
                  source={item.img}
                  style={{
                    width: windowWidth / 8,
                    height: windowWidth / 8,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    color: '#221F1F',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 16,
                  }}>
                  {item.Description}
                </Text>
                <Text
                  style={{
                    color: '#075595',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                  }}>
                  {item.Date}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: windowWidth - 60,
    height: windowWidth - 200,
    backgroundColor: '#fff',
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
