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
  TextInput,
} from 'react-native';
import {Header} from '../Component/Header';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Inquiries = () => {
  const [pressed, setPressed] = useState(0);
   const [pressed1, setPressed1] = useState(0);
  const [data, setData] = useState([
    {
      Title: 'SP_M_112',
      DateTime: 'Dec 16, 2020 1:00 PM',
      Description: 'I need payment extensions for  my commercial shop unit. ',
      Status: 'Pending',
    },
    {
      Title: 'SP_M_112',
      DateTime: 'Dec 16, 2020 1:00 PM',
      Description: 'I need payment extensions for  my commercial shop unit. ',
      Status: 'resolved',
    },
    {
      Title: 'SP_M_112',
      DateTime: 'Dec 16, 2020 1:00 PM',
      Description: 'I need payment extensions for  my commercial shop unit. ',
      Status: 'Pending',
    },
    {
      Title: 'SP_M_112',
      DateTime: 'Dec 16, 2020 1:00 PM',
      Description: 'I need payment extensions for  my commercial shop unit. ',
      Status: 'InProgress',
    },
    {
      Title: 'SP_M_112',
      DateTime: 'Dec 16, 2020 1:00 PM',
      Description: 'I need payment extensions for  my commercial shop unit. ',
      Status: 'Pending',
    },
    {
      Title: 'SP_M_112',
      DateTime: 'Dec 16, 2020 1:00 PM',
      Description: 'I need payment extensions for  my commercial shop unit. ',
      Status: 'Resolved',
    },
    {
      Title: 'SP_M_112',
      DateTime: 'Dec 16, 2020 1:00 PM',
      Description: 'I need payment extensions for  my commercial shop unit. ',
      Status: 'Resolved',
    },
  ]);
const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <Header />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setPressed(0)}
          style={{
            paddingLeft: 20,
            paddingTop: 20,
          }}>
          <View
            style={{
              backgroundColor: pressed === 0 ? '#FFF' : '#F9F9F9',
              padding: 10,
              borderRadius: 6,
              elevation: 3,
              shadowOffset: {width: 1, height: 1},
              shadowColor: '#333',
              shadowOpacity: 0.3,
              shadowRadius: 2,
              marginHorizontal: 4,
              marginVertical: 6,
            }}>
            <Text style={{color: pressed === 0 ? '#000' : '#969BA0'}}>
              Previous Inquiries
            </Text>
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
              backgroundColor: pressed === 1 ? '#FFF' : '#F9F9F9',
              padding: 10,
              borderRadius: 6,
              elevation: 3,
              shadowOffset: {width: 1, height: 1},
              shadowColor: '#333',
              shadowOpacity: 0.3,
              shadowRadius: 2,
              marginHorizontal: 4,
              marginVertical: 6,
            }}>
            <Text style={{color: pressed === 1 ? '#000' : '#969BA0'}}>
              Make a New Inquiry
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {pressed === 0 && (
        <FlatList
          style={{marginBottom: 5}}
          data={data}
          renderItem={({item}) => (
            <View style={{paddingLeft: 20, paddingTop: 40}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('InquiryDetails')}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      color: '#005FFF',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textDecorationLine: 'underline',
                      textDecorationColor: '#005FFF',
                    }}>
                    {item.Title}
                  </Text>
                  <Text
                    style={{
                      color: '#005FFF',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {item.DateTime}
                  </Text>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {item.Description}
                  </Text>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Satus:
                    <Text
                      style={{
                        color:
                          item.Status === 'Pending'
                            ? 'red'
                            : item.Status === 'InProgress'
                            ? 'blue'
                            : 'green',
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {item.Status}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      {pressed == 1 && (
        <ScrollView>
          <View style={{padding: 20}}>
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
                Inquiry Subject
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 1)',
                borderRadius: 5,
                width: windowWidth / 1.1,
              }}>
              <TextInput
                style={{
                  color: '#221F1F',
                  fontFamily: 'Poppins-Italic',
                  fontSize: 14,
                  backgroundColor: 'rgba(248, 248, 248, 1)',
                }}
                placeholder="Enter Subject Name"
                placeholderTextColor={'#6F6F6F'}
                multiline={true}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F4F5F9',
                  width: windowWidth / 1.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  marginTop: 30,
                }}>
                <TouchableOpacity onPress={() => setPressed1(0)}>
                  <Text
                    style={{
                      color: pressed1 === 0 ? '#075595' : '#969BA0',
                      fontSize: 15,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    Payment Details
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPressed1(1)}>
                  <Text
                    style={{
                      color: pressed1 === 1 ? '#075595' : '#969BA0',
                      fontSize: 15,
                      fontFamily: 'Poppins-Medium',
                      marginLeft: 20,
                    }}>
                    General Inquiry
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#221F1F',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Description
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                borderWidth: 1,
                borderColor: '#B9B9B9',
                borderRadius: 5,
                width: windowWidth / 1.1,
                height: windowHeight / 4,
                backgroundColor: '#F8F8F8',
              }}>
              <TextInput
                multiline={true}
                numberOfLines={7}
                style={{
                  fontFamily: 'Poppins-Italic',
                  fontSize: 14,
                }}
                placeholder="Enter Decription Here"
                placeholderTextColor={'#6F6F6F'}
              />
            </View>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#221F1F',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Attachments
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginTop: 20,
                  borderWidth: 1,
                  borderRadius: 5,
                  width: windowWidth / 3,
                  padding: 5,
                  backgroundColor: '#000',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Choose File
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: '#6F6F6F',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  No File Chosen
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View
                style={{
                  marginTop: 20,
                  borderWidth: 1,
                  borderRadius: 5,
                  width: windowWidth / 3,
                  padding: 5,
                  backgroundColor: '#000',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Reset
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  borderWidth: 1,
                  borderRadius: 5,
                  width: windowWidth / 3,
                  padding: 5,
                  backgroundColor: '#075595',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 20,
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Save Details
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default Inquiries;
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
