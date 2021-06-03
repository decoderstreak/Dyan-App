import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import img from '../first/img.png';
import imgg from '../first/imgg.png';
import arrow from './arrow.png';
import Icon from 'react-native-vector-icons';

export default class First extends Component {
    render() {
        return (
          
                <View>
                    <ImageBackground source={img} style={{ height: 820, width: 391 }}>
                        <View style={{marginTop:70,justifyContent:"center"}}>
                        <Image source={imgg}></Image>
                        <Text style={{color:"white",fontSize:50,marginLeft:75,marginTop:-40,fontFamily:"Roboto",fontWeight:"500"}}> DHYAN </Text>
                       
                        </View>
                        <TouchableOpacity style={{marginLeft:240,marginTop:80}}  onPress={() => this.props.navigation.navigate('Onboarding')}>
                        <Image source={arrow} style={{ height: 100, width: 100,borderColor:"white" }}></Image>
                        </TouchableOpacity>
                    </ImageBackground>
                   
                </View>
          

        )
    }
}
