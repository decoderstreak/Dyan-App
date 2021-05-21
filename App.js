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



// import Login from './login/Login.js'
// import PhoneVerification from './login/homescreen';
// import Login from './login/Login';
import Home from './login/homescreen'
import Login from './login/loginscreen'
class App extends React.Component{
  render(){
    return(
      
     <View>
       {/* <Home /> */}
       <Login />
     </View>
       
    )
  }
}


export default App;