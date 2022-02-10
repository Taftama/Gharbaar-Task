import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Overview from './src/Screens/Overview';
import {NavigationContainer} from '@react-navigation/native';
import {Image, Dimensions} from 'react-native';
import ProjectUpdates from './src/Screens/ProjectUpdates';
import UnitDetails from './src/Screens/UnitDetails';
import Inquiries from './src/Screens/Inquiries';
import InquiryDetails from './src/Screens/InquiryDetail';
import Notifications from './src/Screens/notifications';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function OverViewStack(){
  return (
    <Stack.Navigator initialRouteName="Overview">
      <Stack.Screen
        name="Overview"
        component={Overview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ProjectUpdateStack() {
  return (
    <Stack.Navigator initialRouteName="ProjectUpdate">
      <Stack.Screen
        name="ProjectUpdate"
        component={ProjectUpdates}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function UnitDetailsStack() {
  return (
    <Stack.Navigator initialRouteName="UnitDetails">
      <Stack.Screen
        name="UnitDetails"
        component={UnitDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function InquiriesStack() {
  return (
    <Stack.Navigator initialRouteName="Inquiries">
      <Stack.Screen
        name="InquiriesDetails"
        component={Inquiries}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InquiryDetails"
        component={InquiryDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="OverviewStack"
          component={OverViewStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Image
                  style={{
                    width: windowWidth / 15,
                    height: windowWidth / 10,
                    resizeMode: 'contain',
                  }}
                  source={require('./Assets/menu1.png')}
                />
              ) : (
                <Image
                  style={{
                    width: windowWidth / 15,
                    height: windowWidth / 10,
                    resizeMode: 'contain',
                  }}
                  source={require('./Assets/Overview.png')}
                />
              ),
            tabBarLabel: 'Overview',
            tabBarActiveTintColor: '#075595',
            tabBarInactiveTintColor: '#555',
            tabBarLabelStyle: {
              fontSize: 10,
            },
          }}
        />
        <Tab.Screen
          name="ProjectUpdatesStack"
          component={ProjectUpdateStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Image
                  style={{
                    width: windowWidth / 15,
                    height: windowWidth / 10,
                    resizeMode: 'contain',
                  }}
                  source={require('./Assets/projectcolor.png')}
                />
              ) : (
                <Image
                  style={{
                    width: windowWidth / 15,
                    height: windowWidth / 10,
                    resizeMode: 'contain',
                  }}
                  source={require('./Assets/project.png')}
                />
              ),
            tabBarLabel: 'Project Updates',
            tabBarActiveTintColor: '#075595',
            tabBarInactiveTintColor: '#555',
            tabBarLabelStyle: {
              fontSize: 10,
            },
          }}
        />
        <Tab.Screen
          name="UnitDetailsStack"
          component={UnitDetailsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Image
                  style={{
                    width: windowWidth / 15,
                    height: windowWidth / 10,
                    resizeMode: 'contain',
                  }}
                  source={require('./Assets/unitcolor.png')}
                />
              ) : (
                <Image
                  style={{
                    width: windowWidth / 15,
                    height: windowWidth / 10,
                    resizeMode: 'contain',
                  }}
                  source={require('./Assets/unit.png')}
                />
              ),

            tabBarLabel: 'Unit Details',
            tabBarActiveTintColor: '#075595',
            tabBarInactiveTintColor: '#555',
            tabBarLabelStyle: {
              fontSize: 10,
            },
          }}
        />
        <Tab.Screen
          name="Inquiries"
          component={InquiriesStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <Image
                  style={{
                    width: windowWidth / 15,
                    height: windowWidth / 10,
                    resizeMode: 'contain',
                  }}
                  source={require('./Assets/inquiriescolor.png')}
                />
              ) : (
                <Image
                  style={{
                    width: windowWidth / 15,
                    height: windowWidth / 10,
                    resizeMode: 'contain',
                  }}
                  source={require('./Assets/inquiries.png')}
                />
              ),

            tabBarLabel: 'Inquiries',
            tabBarActiveTintColor: '#075595',
            tabBarInactiveTintColor: '#555',
            tabBarLabelStyle: {
              fontSize: 10,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
