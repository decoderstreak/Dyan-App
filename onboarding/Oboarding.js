import React, { Component } from 'react'
import {View,Text,Image,TouchableOpacity, ImageBackground} from 'react-native'
import img from '../first/img.png';
import imgg from '../first/imgg.png';

export default class First extends Component {
    render() {
        return (
           <View style={{backgroundColor:"#253334"}}>
                <View>
                   <ImageBackground source={img} style={{height:820,width:391}}>
                       <View >
                   <Image source={imgg}></Image>
                   </View>

                   <View style={{marginLeft:50,marginTop:-110}}>
                   <Text style={{color:'white',fontSize:32,paddingLeft:65,fontWeight:"500",fontFamily:"Alegreya Sans"}}>WELCOME</Text>
                   <Text style={{color:'white',fontSize:18,fontWeight:"500",fontFamily:"Alegreya Sans",paddingLeft:20}}>Do meditation.Stay focused</Text>
                   <Text style={{color:'white',fontSize:18,fontWeight:"500",fontFamily:"Alegreya Sans",paddingLeft:45}}>Live a healthy life</Text>
                   </View>

                   <View style={{marginLeft:20,marginTop:95,justifyContent:'center'}}>
                       <TouchableOpacity style={{height:61,width:321,backgroundColor:'#7c9a92',borderRadius:10}} onPress={() => this.props.navigation.navigate('Login')}>
                           <Text style={{marginLeft:80,fontSize:20,color:'white',paddingTop:15}}>Login With Email</Text>
                       </TouchableOpacity>
                   </View>

                   <View style={{marginLeft:78,flexDirection:"row",marginTop:20}}>
                   <Text style={{color:'white',fontSize:16,fontWeight:"500",fontFamily:'Roboto'}}>Don’t have an account?</Text>
                   <TouchableOpacity>
                    <Text style={{color:'white',fontSize:16,fontWeight:"500",fontFamily:'Roboto'}}> Sign Up</Text>
                    </TouchableOpacity>
                   </View>
                   </ImageBackground>
               </View>
             </View>
           
        )
    }
}
