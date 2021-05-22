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
import First from './first/First.js'
import Onboarding from './onboarding/Oboarding.js';
import Tools from './tools/Tools.js';
class App extends React.Component{
  render(){
    return(
      <View>
        {/* <Login></Login> */}
        {/* <First></First> */}
        {/* <Onboarding></Onboarding> */}
        <Tools></Tools>
      </View>
    )
  }
}


export default App;