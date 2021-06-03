
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
import 'react-native-gesture-handler';


import Home from './Screens/Home'
import Onboarding from './onboarding/Oboarding';
import First from './first/First'
import Stacknav from './Navigation/navigation'
import { NavigationContainer } from '@react-navigation/native';
class App extends React.Component{
  render(){
    return(
     
     
      //  <NavigationContainer>
      //  <Stacknav />
      //  </NavigationContainer>
      <NavigationContainer>
      <Home />
      </NavigationContainer>
     
    )
  }
}


export default App;