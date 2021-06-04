/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Splashscreen from './Splash Screens/Splash'

class App extends React.Component{
  render(){
    return(
      <View>
       
        <Text> Working with the main page</Text>
        <Splashscreen />
      </View>
    )
  }
}


export default App;