import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen,
  },
  {initialRouteName: 'Home'},
);

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: HomeStack,
  }),
);
