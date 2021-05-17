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



import Login from './login/Login.js'

class App extends React.Component{
  render(){
    return(
      <View>
        <Login></Login>
      </View>
    )
  }
}


export default App;