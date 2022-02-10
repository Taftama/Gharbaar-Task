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
  Image
} from 'react-native';
import {Header} from '../Component/Header';
import GrayCard from '../Component/GrayCard';
import Arrow from 'react-native-vector-icons/AntDesign';
import Close from 'react-native-vector-icons/AntDesign'
import Card from '../Component/Card';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import CarouselCardsFilesDocuments from '../Component/CrouselCardFilesDocuments';
import CarouselCardsFilesReceipt from '../Component/CrouselCardFilesReceipt';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UnitDetails = () => {
  const [pressed, setPressed] = useState(0);
  const [PaymentPlanModal, setpaymentPlanModal] = useState(false);
  const [PaidInstallmentsModal, setPaidInstallmentsModal] = useState(false);
  const [tableHead, setTableHead] = useState(['Payment Details', 'Due Date', 'Payment']);
  const [tableDataPaymentPlan, setTableDataPaymentPlan] = useState([
    ['Down Payment ', 'February 3, 2021', '3050000'],
    ['1st Installment', 'May 3,2021', '761750'],
    ['2nd Installment', 'August 3,2021', '761750'],
    ['3rd Installment', 'November 3,2021', '761750'],
    ['4th Installment', 'February 3,2021', '761750'],
    ['5th Installment', 'May 3,2021', '761750'],
    ['6th Installment', 'August 3,2021', '761750'],
    ['7th Installment', 'November 3,2021', '761750'],
    ['8th Installment', 'December 3,2021', '761750'],
    ['Remaining Amount', 'At Possession', '1016000'],
  ]);
  const [tableDataPaid, setTableDataPaid] = useState([
    ['Down Payment ', 'February 3, 2021', '3050000'],
    ['1st Installment', 'May 3,2021', '761750'],
    ['2nd Installment', 'August 3,2021', '761750'],
  ]);

  return (
    <ScrollView>
      <View style={{backgroundColor: '#FFF', flex: 1, paddingBottom: 40}}>
        <Header />
        <View style={{backgroundColor: '#FFF', padding: 10}}>
          <GrayCard>
            <View>
              <Text
                style={{
                  color: '#221F1F',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Unit Details
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 0.4}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Floor:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      marginLeft: 10,
                    }}>
                    7th floor
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Size:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      marginLeft: 10,
                    }}>
                    1020 sq. ft.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Price:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      marginLeft: 10,
                    }}>
                    9,068,210PKR
                  </Text>
                </View>
              </View>
              <View style={{flex: 0.56}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Unit No:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      marginLeft: 20,
                    }}>
                    FC-335
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Purchase Rate:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      marginLeft: 10,
                    }}>
                    9000 sq. ft.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Sold Date:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      marginLeft: 10,
                    }}>
                    09/12/2021
                  </Text>
                </View>
              </View>
            </View>
          </GrayCard>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F9F9F9',
            width: windowWidth / 1.7,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginLeft: 20,
          }}>
          <TouchableOpacity onPress={() => setPressed(0)}>
            <View
              style={{
                backgroundColor: pressed == 0 ? '#FFF' : '#F9F9F9',
                padding: 10,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: pressed === 0 ? '#221F1F' : '#969BA0',
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                }}>
                Payment Details
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPressed(1)}>
            <View
              style={{
                backgroundColor: pressed === 1 ? '#FFF' : '#F9F9F9',
                padding: 10,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: pressed === 1 ? '#221F1F' : '#969BA0',
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                }}>
                Files
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          {pressed === 0 && (
            <>
              <View style={{paddingLeft: 10, flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 40,
                  }}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontSize: 14,
                      fontFamily: 'Poppins-Medium',
                      flex: 0.4,
                    }}>
                    Total Amount:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontSize: 14,
                      fontFamily: 'Poppins-Medium',
                      flex: 0.9,
                    }}>
                    1 crore, 1 lac and 60 thousand rupees.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontSize: 14,
                      fontFamily: 'Poppins-Medium',
                      flex: 0.4,
                    }}>
                    Amount Paid:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontSize: 14,
                      fontFamily: 'Poppins-Medium',
                      flex: 0.9,
                    }}>
                    38 lac, 11 thousand, 7 hundred and 50 rupees.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#221F1F',
                      fontSize: 14,
                      fontFamily: 'Poppins-Medium',
                      flex: 0.4,
                    }}>
                    Total Left:
                  </Text>
                  <Text
                    style={{
                      color: '#6F6F6F',
                      fontSize: 14,
                      fontFamily: 'Poppins-Medium',
                      flex: 0.9,
                    }}>
                    63 lac, 48 thousand, 2 hundred and 50 rupees.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 40,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#8CC540',
                      width: windowWidth / 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontSize: 14,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      38%
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: 'rgba(0, 167, 157, 0.17)',
                      width: windowWidth / 2,
                      justifyContent: 'center',
                      // alignItems: 'center',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        color: '#221F1F',
                        fontSize: 14,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      62% Left
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => setpaymentPlanModal(true)}>
                  <Card>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#221F1F',
                          fontSize: 14,
                          fontFamily: 'Poppins-Medium',
                          marginRight: 10,
                        }}>
                        View Payment Plan
                      </Text>
                      <Arrow name="arrowright" size={30} color="#000" />
                    </View>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setPaidInstallmentsModal(true)}>
                  <Card>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#221F1F',
                          fontSize: 14,
                          fontFamily: 'Poppins-Medium',
                          marginRight: 10,
                        }}>
                        View Paid Installments
                      </Text>
                      <Arrow name="arrowright" size={30} color="#000" />
                    </View>
                  </Card>
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={PaymentPlanModal}
                  onRequestClose={() => {
                    setpaymentPlanModal(!PaymentPlanModal);
                  }}>
                  <ScrollView>
                    <View
                      style={{
                        borderRadius: 6,
                        elevation: 3,
                        backgroundColor: '#fff',
                        shadowOffset: {width: 1, height: 1},
                        shadowColor: '#333',
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        marginHorizontal: 4,
                        marginVertical: 6,
                      }}>
                      <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity
                          style={{
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                          }}
                          onPress={() =>
                            setpaymentPlanModal(!PaymentPlanModal)
                          }>
                          <Text style={{color: '#000'}}>close</Text>
                          <Close name="closesquare" size={30} color="#000" />
                        </TouchableOpacity>
                        <View style={styles.TableContainer}>
                          <Table borderStyle={{borderWidth: 1}}>
                            <Row
                              data={tableHead}
                              flexArr={[2, 2, 2]}
                              style={styles.header}
                              textStyle={styles.text}
                            />
                            <TableWrapper style={styles.wrapper}>
                              <Rows
                                data={tableDataPaymentPlan}
                                flexArr={[2, 2, 2]}
                                style={[
                                  styles.row,
                                  tableDataPaymentPlan % 2 && {
                                    backgroundColor: '#F7F6E7',
                                  },
                                ]}
                                textStyle={styles.textRow}
                              />
                            </TableWrapper>
                          </Table>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </Modal>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={PaidInstallmentsModal}
                  onRequestClose={() => {
                    setPaidInstallmentsModal(!PaidInstallmentsModal);
                  }}>
                  <ScrollView>
                    <View
                      style={{
                        borderRadius: 6,
                        elevation: 3,
                        backgroundColor: '#fff',
                        shadowOffset: {width: 1, height: 1},
                        shadowColor: '#333',
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        marginHorizontal: 4,
                        marginVertical: 6,
                      }}>
                      <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity
                          style={{
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                          }}
                          onPress={() =>
                            setPaidInstallmentsModal(!PaidInstallmentsModal)
                          }>
                          <Text style={{color: '#000'}}>close</Text>
                          <Close name="closesquare" size={30} color="#000" />
                        </TouchableOpacity>
                        <View style={styles.TableContainer}>
                          <Table borderStyle={{borderWidth: 1}}>
                            <Row
                              data={tableHead}
                              flexArr={[2, 2, 2]}
                              style={styles.header}
                              textStyle={styles.text}
                            />
                            <TableWrapper style={styles.wrapper}>
                              <Rows
                                data={tableDataPaid}
                                flexArr={[2, 2, 2]}
                                style={[
                                  styles.row,
                                  tableDataPaid % 2 && {
                                    backgroundColor: '#F7F6E7',
                                  },
                                ]}
                                textStyle={styles.textRow}
                              />
                            </TableWrapper>
                          </Table>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </Modal>
              </View>
            </>
          )}
          {pressed === 1 && (
            <View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Assets/folder.png')}
                  style={{
                    width: windowWidth / 8,
                    height: windowWidth / 8,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    color: '#221F1F',
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                    marginHorizontal: 10,
                  }}>
                  Documents
                </Text>
              </View>
              <CarouselCardsFilesDocuments />
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Assets/folder.png')}
                  style={{
                    width: windowWidth / 8,
                    height: windowWidth / 8,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    color: '#221F1F',
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                    marginHorizontal: 10,
                  }}>
                  Given Receipts
                </Text>
              </View>
              <CarouselCardsFilesReceipt/>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default UnitDetails;
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
