import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './Components/HomeScreen'

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }
},
{
  navigationOptions: {
    headerStyle: { height: 24 }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <SimpleApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
