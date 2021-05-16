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

class Splashscreen extends React.Component{
  render(){
    return(
      <View>
        <Text>Hello This is splash screen</Text>
        <Text>What's up dude</Text>
      </View>
    )
  }
}


export default Splashscreen;