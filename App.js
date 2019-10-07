/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {YellowBox} from 'react-native';
import AppNavigator from './navigator';
import 'react-native-gesture-handler';

YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

const App = () => {
  return <AppNavigator />;
};

export default App;
