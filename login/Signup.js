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