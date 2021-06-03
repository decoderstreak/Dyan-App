import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from '../first/First'
import Onboarding from '../onboarding/Oboarding'
import Login from '../login/loginscreen';
import Signup from '../login/Signup';
const Stack = createStackNavigator();

function Stacknav() {
  return (
    // <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Stacknav;