import 'react-native-gesture-handler';
import React from 'react';
import EventListScreen from './src/screens/EventListScreen';
import LoginScreen from './src/screens/LoginScreen';
import EventFormScreen from './src/screens/EventFormScreen';
import EventDetailScreen from './src/screens/EventDetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import InformationScreen from './src/screens/InformationScreen';
import SplashScreen from 'react-native-splash-screen'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/FontAwesome'

const AppStack = createStackNavigator({
  EventList: EventListScreen,
  EventForm: EventFormScreen,
  EventDetail: EventDetailScreen
});
const AppStack2 = createStackNavigator({
  Settings: SettingsScreen,
  ChangePassword: ChangePasswordScreen,
});
const AppStack3 = createStackNavigator({
  Information: InformationScreen,
});
const AuthNavigator = createStackNavigator({
  LoginRoute: {
    screen: LoginScreen,
    navigationOptions: () => ({
      headerShown: false
    })
  }
});
onSignedOut = () => {
  navigation.navigate('Auth');
}

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarOptions: { 
        activeTintColor:'#000066', 
        inactiveTintColor: 'grey',
        style: {
          backgroundColor: 'white'
        }
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={20}/>
      )
    },
  },
  Settings: {
    screen: AppStack2,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarOptions: { 
        activeTintColor:'#000066',
        inactiveTintColor: 'grey',
        style: {
          backgroundColor: 'white'
          }
        },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="gears" color={tintColor} size={20}/>
      )
    
    },
  },
  Info: {
    screen: AppStack3,
    navigationOptions: {
      tabBarLabel: 'Info',
      tabBarOptions: { 
        activeTintColor:'#000066',
        inactiveTintColor: 'grey',
        style: {
          backgroundColor: 'white'
          }
        },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart-o" color={tintColor} size={20}/>
      )
    },
  },
});

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: MainTabs,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'Auth',
  }
));

export default function App() {

  SplashScreen.hide();
  return (
    <AppContainer
        screenProps={{ appName: 'MobileProg2FinalAssigment' }}
      />
  );
}
