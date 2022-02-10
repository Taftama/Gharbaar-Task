/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
import {
  ScrollView,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';
import Send from 'react-native-vector-icons/Feather';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import CarouselCardsFilesDocuments from '../Component/CrouselCardFilesDocuments';
import CarouselCardsFilesReceipt from '../Component/CrouselCardFilesReceipt';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InquiryDetails = () => {
const navigation= useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#FFF',
          flex: 1,
          paddingBottom: 40,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#221F1F',
              fontFamily: 'Poppins-Medium',
              fontSize: 10,
            }}>
            Previous Inquiries
          </Text>
          <View style={{justifyContent: 'center'}}>
            <Arrow name="caretright" size={10} color="#000" />
          </View>
          <Text
            style={{
              color: '#221F1F',
              fontFamily: 'Poppins-Medium',
              fontSize: 10,
            }}>
            [ Inquiry ID: SPO_33 ]
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
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
              elevation: 3,
              backgroundColor: '#fff',
              shadowOffset: {width: 1, height: 1},
              shadowColor: '#333',
              shadowOpacity: 0.3,
              shadowRadius: 2,
              marginHorizontal: 4,
              marginVertical: 6,
              flexDirection: 'row',
              padding: 10,
            }}>
            <Text
              style={{
                color: '#221F1F',
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
              }}>
              Status:
            </Text>
            <View
              style={{
                backgroundColor: 'rgba(250, 127, 37, 0.59)',
                borderColor: 'rgba(250, 127, 37, 1)',
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              <Text
                style={{
                  color: '#221F1F',
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                }}>
                Pending
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#221F1F',
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
            }}>
            Subject: Unite Details of my Commercial shop
          </Text>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <Text
            style={{
              color: '#221F1F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Case ID:
          </Text>
          <Text
            style={{
              color: '#6F6F6F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              marginLeft: 10,
            }}>
            SPO-33
          </Text>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text
            style={{
              color: '#221F1F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Created:
          </Text>
          <Text
            style={{
              color: '#6F6F6F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              marginLeft: 10,
            }}>
            July 27, 2021 3:11 PM
          </Text>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text
            style={{
              color: '#221F1F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Case type:
          </Text>
          <Text
            style={{
              color: '#6F6F6F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              marginLeft: 10,
            }}>
            Accounts and Billings
          </Text>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text
            style={{
              color: '#221F1F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Opened By:
          </Text>
          <Text
            style={{
              color: '#6F6F6F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              marginLeft: 10,
            }}>
            imtiaz_422@msn.com
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(228, 228, 228, 1)',
            padding: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#221F1F',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Correspondence
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(228, 228, 228, 1)',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#BEBEBE',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Tuesday July 27, 2021
          </Text>
          <View style={{marginTop: 30, flexDirection: 'row'}}>
            <Text
              style={{
                color: '#221F1F',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Qazi Muhammad Imtiaz Ud Din
            </Text>
            <Text
              style={{
                color: '#BEBEBE',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                marginLeft: 20,
              }}>
              3:11 PM
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <ImageBackground
              source={require('../../Assets/Vector66.png')}
              style={{
                width: windowWidth / 1.1,
                height: windowWidth / 4,
                resizeMode: 'contain',
                justifyContent: 'center',
                padding: 5,
              }}>
              <Text
                style={{
                  color: '#221F1F',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                The "Sold rate" and "Sold at" figures displayed in my unit
                details do not match. Please clarify.
              </Text>
            </ImageBackground>
          </View>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                color: '#BEBEBE',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Wednesday July 28, 2021
            </Text>
          </View>
          <View style={{marginTop: 30, flexDirection: 'row'}}>
            <Text
              style={{
                color: '#221F1F',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Waqar - Agent at 6th Road Center
            </Text>
            <Text
              style={{
                color: '#BEBEBE',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                marginLeft: 20,
              }}>
              10:36 AM
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <ImageBackground
              source={require('../../Assets/Vector67.png')}
              style={{
                width: windowWidth / 1.2,
                height: windowWidth / 4,
                resizeMode: 'contain',
                justifyContent: 'center',
                padding: 5,
              }}>
              <Text
                style={{
                  color: '#221F1F',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                Dear Sir AOA, It was a portal issue on our part, It is requested
                that you please log-in to your portal once more and verify.
                Regards, Waqar
              </Text>
            </ImageBackground>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginTop: 30,
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 1)',
                padding: 10,
                borderRadius: 30,
                width: windowWidth / 1.3,
              }}>
              <TextInput
                style={{
                  color: '#221F1F',
                  fontFamily: 'Poppins-Italic',
                  fontSize: 14,
                }}
                placeholder="Message"
                placeholderTextColor={'#6F6F6F'}
                multiline={true}
              />
            </View>
            <TouchableOpacity
              style={{
                marginTop: 30,
                backgroundColor: '#075595',
                paddingLeft: 10,
                paddingRight:10,
                borderRadius: 5,
                justifyContent:'center'
              }}>
                  <Send name='send' size={30} color="#FFF" />
              </TouchableOpacity>
          </View>
        </View>
      
      </View>
    </ScrollView>
  );
};
export default InquiryDetails;
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
  TableContainer: {backgroundColor: '#fff'},
  header: {
    height: 50,
    backgroundColor: 'rgba(7, 85, 149, 1)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {textAlign: 'center', fontWeight: '100', color: '#FFF'},
  textRow: {textAlign: 'center', fontWeight: '100', color: '#000'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#F4F4FC'},
});
