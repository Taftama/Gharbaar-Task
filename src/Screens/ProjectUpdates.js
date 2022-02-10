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
  FlatList
} from 'react-native';
import {Header} from '../Component/Header';
import Card from '../Component/Card';
import Icon from 'react-native-vector-icons/Entypo';
import Heart from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/FontAwesome'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProjectUpdates = () => {
  const [pressed, setPressed] = useState(0);
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => {
      //To toggle the show text or hide it
      setTextShown(!textShown);
    };

    const onTextLayout = useCallback(e => {
      setLengthMore(e.nativeEvent.lines.length >= 1); 
      // console.log(e.nativeEvent);
    }, []);
 const [data, setData] = useState([
   {
     img: require('../../Assets/Usericon.png'),
     name: 'Sarah Ismail',
     Date: 'September 20, 2021',
     Image: require('../../Assets/Coffee.png'),
     MessageTitle: 'Eid-Ul-Azha Greetings!',
     MessageBody: 'AoA Everyone! ',
     Message: 'The management would like to extend sfjsdhf sdjfhhdf',
   },
   {
     img: require('../../Assets/Usericon.png'),
     name: 'Sarah Ismail',
     Date: 'September 20, 2021',
     Image: require('../../Assets/Coffee.png'),
     MessageTitle: 'Eid-Ul-Azha Greetings!',
     MessageBody:
       'AoA Everyone! The management would like to extend sfjsdhf sdjfhhdf',
     Message: 'The management would like to extend sfjsdhf sdjfhhdf',
   },
   {
     img: require('../../Assets/Usericon.png'),
     name: 'Sarah Ismail',
     Date: 'September 20, 2021',
     Image: require('../../Assets/Coffee.png'),
     MessageTitle: 'Eid-Ul-Azha Greetings!',
     MessageBody:
       'AoA Everyone! The management would like to extend sfjsdhf sdjfhhdf',
     Message: 'The management would like to extend sfjsdhf sdjfhhdf',
   },
   {
     img: require('../../Assets/Usericon.png'),
     name: 'Sarah Ismail',
     Date: 'September 20, 2021',
     Image: require('../../Assets/Coffee.png'),
     MessageTitle: 'Eid-Ul-Azha Greetings!',
     MessageBody:
       'AoA Everyone! The management would like to extend sfjsdhf sdjfhhdf',
     Message: 'The management would like to extend sfjsdhf sdjfhhdf',
   },
   {
     img: require('../../Assets/Usericon.png'),
     name: 'Sarah Ismail',
     Date: 'September 20, 2021',
     Image: require('../../Assets/Coffee.png'),
     MessageTitle: 'Eid-Ul-Azha Greetings!',
     MessageBody:
       'AoA Everyone! The management would like to extend sfjsdhf sdjfhhdf',
     Message: 'The management would like to extend sfjsdhf sdjfhhdf',
   },
   {
     img: require('../../Assets/Usericon.png'),
     name: 'Sarah Ismail',
     Date: 'September 20, 2021',
     Image: require('../../Assets/Coffee.png'),
     MessageTitle: 'Eid-Ul-Azha Greetings!',
     MessageBody:
       'AoA Everyone! The management would like to extend sfjsdhf sdjfhhdf',
     Message: 'The management would like to extend sfjsdhf sdjfhhdf',
   },
   {
     img: require('../../Assets/Usericon.png'),
     name: 'Sarah Ismail',
     Date: 'September 20, 2021',
     Image: require('../../Assets/Coffee.png'),
     MessageTitle: 'Eid-Ul-Azha Greetings!',
     MessageBody:
       'AoA Everyone! The management would like to extend sfjsdhf sdjfhhdf',
     Message: 'The management would like to extend sfjsdhf sdjfhhdf',
   },
 ]);
const [members, setMembers] = useState([
  {
    img: require('../../Assets/bluegreen.png'),
    name: 'Taimoor Liaquat',
  },
  {
    img: require('../../Assets/blackgreen.png'),
    name: 'Ali Bin Arshad',
  },
  {
    img: require('../../Assets/bluered.png'),
    name: 'Romeesa Asghar',
  },
  {
    img: require('../../Assets/blackgreen.png'),
    name: 'Fiza Rubab',
  },
  {
    img: require('../../Assets/bluegreen.png'),
    name: 'Aimen Faheem',
  },
  {
    img: require('../../Assets/blackred.png'),
    name: 'Mirza Ghalib',
  },
  {
    img: require('../../Assets/bluegreen.png'),
    name: 'Quaid e Azam',
  },
  {
    img: require('../../Assets/blackred.png'),
    name: 'Zain Shahid',
  },
  {
    img: require('../../Assets/bluegreen.png'),
    name: 'Maryam Aziz',
  },
]);
 
  return (
    <>
      <Header />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setPressed(0)}
          style={{
            paddingLeft: 20,
            paddingTop: 20,
            paddingBottom:20
          }}>
          <View
            style={{
              backgroundColor: pressed == 0 ? '#FFF' : '#F9F9F9',
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{color: '#000'}}>Updates</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPressed(1)}
          style={{
            paddingTop: 20,
            paddingLeft: 20,
          }}>
          <View
            style={{
              backgroundColor: pressed == 1 ? '#FFF' : '#F9F9F9',
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{color: '#000'}}>Members</Text>
          </View>
        </TouchableOpacity>
      </View>
      {pressed == 0 && (
        <FlatList
          style={{marginBottom: 5}}
          data={data}
          renderItem={({item}) => (
            <View style={{padding: 10}}>
              <Card>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={item.img}
                      style={{
                        width: windowWidth / 8,
                        height: windowWidth / 8,
                        resizeMode: 'contain',
                      }}
                    />
                    <View style={{justifyContent: 'center', marginLeft: 20}}>
                      <Text
                        style={{
                          color: '#221F1F',
                          fontFamily: 'Poppins-Medium',
                          fontSize: 16,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: '#959595',
                          fontFamily: 'Poppins-Medium',
                          fontSize: 12,
                        }}>
                        {item.Date}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Icon name="dots-three-horizontal" size={20} color="#000" />
                  </View>
                </View>

                <View style={{marginTop: 20}}>
                  <Image
                    source={item.Image}
                    style={{
                      width: windowWidth / 1.2,
                      height: windowWidth / 1.9,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{marginTop: 20}}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    {item.MessageTitle}
                  </Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {item.MessageBody}
                  </Text>
                  <Text
                    onTextLayout={onTextLayout}
                    numberOfLines={textShown ? undefined : 1}
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {item.Message}
                  </Text>
                  {lengthMore ? (
                    <Text
                      onPress={toggleNumberOfLines}
                      style={{lineHeight: 21, marginTop: 10, color: '#959595'}}>
                      {textShown ? 'See less...' : 'See more...'}
                    </Text>
                  ) : null}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 20,
                  }}>
                  <View style={{marginHorizontal: 10}}>
                    <Text style={{color: '#075595'}}>10 Likes</Text>
                  </View>

                  <View>
                    <Text style={{color: '#075595'}}>5 Comments</Text>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#E4E4E4',
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 5,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <View style={{marginHorizontal: 10}}>
                    <Heart name="hearto" size={20} color="#6E6E6E" />
                  </View>
                  <Text
                    style={{
                      color: '#6E6E6E',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Like
                  </Text>
                  <View style={{marginLeft: 20, marginHorizontal: 10}}>
                    <Comment name="commenting-o" size={20} color="#6E6E6E" />
                  </View>
                  <Text
                    style={{
                      color: '#6E6E6E',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Comment
                  </Text>
                </View>
              </Card>
            </View>
          )}
        />
      )}
      {pressed == 1 && (
        <>
          <View style={{padding: 20}}>
            <Text
              style={{
                color: '#221F1F',
                fontFamily: 'Poppins-Medium',
                fontSize: 26,
              }}>
              Members
            </Text>
            <Text
              style={{
                color: '#959595',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              79 Members
              <Text
                style={{
                  color: '#8CC540',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                - 40 Active
              </Text>
            </Text>
          </View>
          <FlatList
            style={{marginBottom: 5}}
            data={members}
            renderItem={({item}) => (
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
                <View style={{justifyContent:'center', alignItems:'center', marginLeft:10}}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 18,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            )}
          />
        </>
      )}
    </>
  );
};
export default ProjectUpdates;
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
