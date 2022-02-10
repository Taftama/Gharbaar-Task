/* eslint-disable prettier/prettier */
import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  Dimensions,
  View,
  Text, TouchableOpacity, StyleSheet
} from 'react-native';
import { Header } from '../Component/Header';
import Card from '../Component/Card';
import {
  BarChart,
} from 'react-native-chart-kit';
import CarouselCards from '../Component/CrouselCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Overview = () => {
  const data = {
    labels: ['Oct2018', 'Nov2018', 'Dec2018', 'Jan2019', 'Feb2019'],
    datasets: [
      {
        data: [1, 1.6, 1.4, 1.9, 2.5],
        strokeWidth: 2,
      },
    ],
  };
const [index, setIndex] = useState(0);
const isCarousel = useRef(null);
  return (
    <>
      <Header />
      <ScrollView>
        <View style={{padding: 10}}>
          <Card>
            <View>
              <Text
                style={{
                  color: '#221F1F',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Price Index
              </Text>
              <Text
                style={{
                  color: '#969BA0',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 12,
                }}>
                41 food court units
                <Text
                  style={{
                    color: '#221F1F',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                  }}>
                  - 4 units left
                </Text>
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#F4F5F9',
                borderRadius: 5,
                flex: 1,
                marginTop: 40,
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 5,
                  flex: 0.33,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#221F1F',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 11,
                  }}>
                  Food Court Shop
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F4F5F9',
                  padding: 10,
                  flex: 0.33,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#969BA0',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 11,
                  }}>
                  Residential Apartment
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F4F5F9',
                  padding: 10,
                  flex: 0.33,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#969BA0',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 11,
                  }}>
                  Retail Shop
                </Text>
              </View>
            </View>
            <View>
              <BarChart
                style={{marginVertical: 8}}
                data={data}
                width={windowWidth / 1.16}
                height={windowHeight / 3}
                yAxisLabel="crore"
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#FFF',
                  backgroundGradientTo: '#FFF',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: () => '#075595',
                  style: {
                    borderRadius: 16,
                  },
                }}
              />
            </View>
          </Card>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: '#221F1F',
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
              }}>
              Construction Progress
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <CarouselCards />
          </View>

          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: '#221F1F',
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
              }}>
              Project Pictures
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <CarouselCards />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Overview;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: windowWidth - 60,
    height: windowWidth - 200,
    backgroundColor:"#fff",
    padding:10
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