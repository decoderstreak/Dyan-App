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
                   <Image source={imgg} style={{marginLeft:12,marginTop:75}}></Image>
                   <Text style={{color:'white',fontSize:32,marginLeft:129,marginTop:-100}}>WELCOME</Text>
                   <Text style={{color:'white',fontSize:18,marginLeft:80,marginTop:6}}>Do meditation.Stay focused</Text>
                   <Text style={{color:'white',fontSize:18,marginLeft:120,marginTop:6}}>Live a healthy life</Text>
                   <View>
                       <TouchableOpacity style={{height:61,width:321,backgroundColor:'#7c9a92',borderRadius:10,marginLeft:34,marginTop:95,justifyContent:'center'}}>
                           <Text style={{marginLeft:80,fontSize:20,color:'white'}}>Login With Email</Text>
                       </TouchableOpacity>
                   </View>
                   <Text style={{color:'white',marginLeft:78,fontSize:16,marginTop:13}}>Don’t have an account? 
                   <TouchableOpacity>
                       <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}> Sign Up</Text>
                    </TouchableOpacity>
                   </Text>
                   </ImageBackground>
               </View>
             </View>
           
        )
    }
}
