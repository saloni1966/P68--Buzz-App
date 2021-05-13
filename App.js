import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import fb from './screens/fb';
import insta from './screens/insta'

import AppHeader from './AppHeader'
export default function App() {
  return (
    


   <AppConatainer  />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const TabNavigator = createBottomTabNavigator({
  fb : {screen:fb},
  in : {screen:insta}
})
var AppConatainer =  createAppContainer(TabNavigator);