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
  
  import firestore from '@react-native-firebase/firestore';


 
  
      
   class Calm extends React.Component {

    // state  = {
    //     User:{
    //       name=""
    //     }
    // }
     constructor(props){
       super(props);
       this.getUser();
     }
    
   getUser = async() =>{
    const User =  await firestore().collection('Users').doc('PmrfMsEFVTXFMvemMTvB').get();
    console.log(User);

   }


   //Unserstand the above written logic that u have fetched data from the database
   //U need to understand each and every line so that u may be good at backend and god at the react native field too
     render() {

       return (
       
       <View>
           <Text>hii</Text>
           <Text>Creating a Calm page that is hoooooooooooooooooo</Text>
           <Text>Com'on let's create dude</Text>
           {/* <Text>{this.state.User.name}</Text> */}
       </View>
      
       );
              }
    
  }
  
  
  
  

  
  
 
  export default Calm;