// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';

// function Home() {
//   // Set an initializing state whilst Firebase connects
// //   const [initializing, setInitializing] = useState(true);
// //   const [user, setUser] = useState();

// //   // Handle user state changes
// //   function onAuthStateChanged(user) {
// //     setUser(user);
// //     if (initializing) setInitializing(false);
// //   }

// //   useEffect(() => {
// //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
// //     return subscriber; // unsubscribe on unmount
// //   }, []);

// //   if (initializing) return null;

// //   if (!user) {
// //     return (
// //       <View>
// //         <Text>Login</Text>
// //       </View>
// //     );
// //   }


// auth()
//   .signInAnonymously()
//   .then(() => {
//     console.log('User signed in anonymously');
//   })
//   .catch(error => {
//     if (error.code === 'auth/operation-not-allowed') {
//       console.log('Enable anonymous in your firebase console.');
//     }

//     console.error(error);
//   });
//   return (
//     <View>
//       <Text>Welcome </Text>
//     </View>
//   );
// }

// export default Home;
// import React, { useState, useEffect } from 'react';
// import { Button, TextInput, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';

// export default function PhoneVerification() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   // Handle create account button press
//   async function createAccount() {
//     try {
//       await auth().createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!');
//       console.log('User account created & signed in!');
//     } catch (error) {
//       if (error.code === 'auth/email-already-in-use') {
//         console.log('That email address is already in use!');
//       }

//       if (error.code === 'auth/invalid-email') {
//         console.log('That email address is invalid!');
//       }
//       console.error(error);
//     }
//   }

//   // Handle the verify phone button press
//   async function verifyPhoneNumber(phoneNumber) {
//     const confirmation = await auth().verifyPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   // Handle confirm code button press
//   async function confirmCode() {
//     try {
//       const credential = auth.PhoneAuthProvider.credential(confirm.verificationId, code);
//       let userData = await auth().currentUser.linkWithCredential(credential);
//       setUser(userData.user);
//     } catch (error) {
//       if (error.code == 'auth/invalid-verification-code') {
//         console.log('Invalid code.');
//       } else {
//         console.log('Account linking error');
//       }
//     }
//   }

//   if (initializing) return null;

//   if (!user) {
//     return <Button title="Login" onPress={() => createAccount()} />;
//   } else if (!user.phoneNumber) {
//     if (!confirm) {
//       return (
//         <Button
//           title="Verify Phone Number"
//           onPress={() => verifyPhoneNumber('ENTER A VALID TESTING OR REAL PHONE NUMBER HERE')}
//         />
//       );
//     }
//     return (
//       <>
//         <TextInput value={code} onChangeText={text => setCode(text)} />
//         <Button title="Confirm Code" onPress={() => confirmCode()} />
//       </>
//     );
//   } else {
//     return (
//       <Text>
//         Welcome! linked with 
//       </Text>
//     );
//   }
// }

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app'
// import {TextInput} from 'react-native-paper'

// function Home() {
//   const [text, setText] = React.useState('');
//   var email='abc@gmail.com'
//   var password='123'
   
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
//   return(
   
//     <View>
 
//       <Text>Signin page</Text>
//       <TextInput
//       label="Email"
//       value={text}
//       onChangeText={text => setText(text)}
//     />
//      <TextInput
//       label="Password"
//       value={text}
//       onChangeText={text => setText(text)}
//     />
//    <Button
//   // onPress={onPressLearnMore}
//   title="sign in"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
//     </View>
//   )


//   }

// export default Home;

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
  import {TextInput} from 'react-native-paper'
  import auth from '@react-native-firebase/auth';
  
  // const Userinfo = {username:'admin' ,password:'admin123', email:'decoder@123'}
  
   class Signup extends React.Component {
    constructor(props){
      super(props);
      this.state={
        check:false,
        username: '',
        password:'',
        email:'',
  
      }
      
    }
    usernamevalue=(e)=>{
       console.log(e)
    }
    signupbuttonclicking=()=>{
      console.log("hiiii", this.state.email,this.state.password)
        auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(() => {
          console.log('User account created & signed in!');
          alert("User account created and please log in")
          
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            alert(error.code)
          }
        
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            alert(error.code)
          }
        
          console.error(error);
        });
  
    }
   
     render() {
       return (
       
           <View>
                <Text style={{fontSize: 15,color: "#707070"}}>Welcome To</Text>
                <Text style={{fontWeight: "bold",fontSize: 35,}}>BMinor</Text>
                <TextInput
                label={'email'}
                onChangeText={(emailvalue)=>{this.setState({email:emailvalue})}}
                
                
                />
                 <TextInput
                label={'password'}
                onChangeText={(passvalue)=>{this.setState({password:passvalue})}}
                
                
                />

<TouchableOpacity  style={styles.button} onPress={this.signupbuttonclicking}><Text style={styles.ButtonText}>Signup</Text></TouchableOpacity>
         
                </View>
 
      
       );
              }
    
  }
  
  
  
  

  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#191720'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:50
    },
    footer: {
      flex:3,
      width:"94%",
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
      marginLeft:11,
    },
    logo: {
      height: 250,
      width: 246,
      backgroundColor: "black",
      borderRadius: 250/2, 
    },
  
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
  
    text: {
        color: 'grey',
        marginTop:5
    },
  
    button: {
        marginTop: 30,
        
        alignSelf:'stretch',
        alignItems:"center",
        padding:20,
        backgroundColor:"black",
        marginTop:10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    button1 :{
      marginTop: 30,
      alignSelf:'stretch',
      alignItems:"center",
      padding:20,
      backgroundColor:"#DDDDDD",
      marginTop:10,
      borderColor:"#DDDDDD",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
  
    },
  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor:"#DDDDDD",
      borderRadius:10
    },
   
    ButtonText: {
      fontSize: 18,
      color: "#fff",
      
      fontWeight: "bold",
      alignSelf: "center",
     
    },
    ButtonText1: {
      fontSize: 18,
      color: "black",
      fontWeight: "bold",
      alignSelf: "center",
     
    }
  });
  export default Signup;