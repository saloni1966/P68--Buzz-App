
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {HEADER} from 'react-native-elements'
export default class AppHeader extends React.Component{
    render(){
  return (
    <View style={styles.container}>
     <Header
  
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Buzz App', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
      
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
