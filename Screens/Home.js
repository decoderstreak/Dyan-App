import React from 'react';
  import { 
      View, 
      Text, 
      TouchableOpacity, 
      Dimensions,
      StyleSheet,
      StatusBar,
      Image,
      Button,ScrollView,
      
  } from 'react-native';
  import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
  import Calm from './calm'; 
  import Relax from './relax';
  import Stress from './stress';
  import logo from '../login/Logo.png';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  const Tab = createBottomTabNavigator();
  
  
 
   class Home extends React.Component {
    
   
     render() {
       return (
       
        <Tab.Navigator>
        <Tab.Screen name="Calm" component={Calm} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image source={logo}></Image>
           
          ),
        }}/>
        <Tab.Screen name="Relax" component={Relax} />
        <Tab.Screen name="Stress" component={Stress} />
        
      </Tab.Navigator>
 
      
       );
              }
    
  }
  
  
  
  

  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#191720'
    },
    
  });
  export default Home;