import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { zoomIn} from 'react-navigation-transitions';
import { Ionicons } from '@expo/vector-icons';
// importing navigation

import React from 'react';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/other';
import RealtorScreen from './screens/realtors';
import LoginScreen from './screens/Login';
import ChatScreen from './screens/chat';
import ForgotPassword from './forgotpassword';
// importing all the pages

// Switch Navigator
const AuthNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Forgot: ForgotPassword
  },
  {
    initialRouteName:
      'Login'
  }
);
//initialPage


// Tab Navigator
// Saying which pages are suppose to be displayed on tabbar and setting icons
const HomeNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={25} color={tintColor} />//adding icons
        }, 
    },
    Realtors: { screen: RealtorScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-contacts" size={25} color={tintColor} />//adding icons
        }, 
    },
    Profile: { screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-contact" size={25} color={tintColor} />//adding icons
        }, 
     },
     Chat: { screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-mail-open" size={25} color={tintColor} />
      },
    },
  },
  {
    initialRouteName: 'Home'
  }
)

// app entry point
export default createAppContainer( // must have this wrapper (function) to have a starting point for the navigators
  createStackNavigator(
    {
      App: HomeNavigator,
      Auth: AuthNavigator
    },
    {
      initialRouteName: 'Auth', // which screen / navigations stack to begin with (string name is sensitive)
      transitionConfig: () => zoomIn(), // screen to screen transitions
      navigationOptions: {
        headerVisible: false,// remove top bar and make full screen
      },
      defaultNavigationOptions: { // remove swipe back gesture
        gesturesEnabled: false,
        header: null,
      }
    }
  )
);