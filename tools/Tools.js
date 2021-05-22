import React, { Component } from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import imgg from '../tools/imggg.png';
import image2 from '../tools/Group.png';
import image from '../tools/vector.png';
import booster from '../tools/booster.png';
import three from '../tools/three.png';
import head from '../tools/positive.png';
import setting from '../tools/four.png';
import vectorfour from '../tools/vectorfour.png';
import vectorfive from '../tools/vectorfive.png';
import flg from '../tools/flg.png';
import premium from '../tools/premium.png'

export default class Tools extends Component {
    render() {
        return (
            <View>
              <Text style={{color:'white',fontSize:32,marginTop:158,marginLeft:25}}>Tools</Text>
              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={{width:153,height:115,borderRadius:20,backgroundColor:"#3e8469",marginLeft:25,marginTop:20}}>
                   <ImageBackground  source={imgg}style={{width:153,height:100,marginTop:15}}>
                       <Image source={image2} style={{width:18.15,height:17,marginLeft:14,marginTop:37}}></Image>
                       <Text style={{fontSize:16,color:'white',marginTop:4,marginLeft:12}}>Mood Journal</Text>
                   </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={{width:153,height:115,borderRadius:20,backgroundColor:"#69b09c",marginLeft:25,marginTop:20}}>
                   <ImageBackground  source={image}style={{width:155,height:100,marginTop:15,marginLeft:-1}}>
                       <Image source={booster} style={{width:18.15,height:17,marginLeft:14,marginTop:37}}></Image>
                       <Text style={{fontSize:16,color:'white',marginTop:4,marginLeft:12}}>Mood Booster</Text>
                    </ImageBackground>
                  </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={{width:153,height:115,borderRadius:20,backgroundColor:"#6aae72",marginLeft:25,marginTop:20}}>
                   <ImageBackground  source={three}style={{width:153,height:100,marginTop:15}}>
                       <Image source={head} style={{width:18.15,height:17,marginLeft:14,marginTop:37}}></Image>
                       <Text style={{fontSize:16,color:'white',marginTop:4,marginLeft:12}}>Positive Notes</Text>
                   </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={{width:153,height:115,borderRadius:20,backgroundColor:"#a9d571",marginLeft:25,marginTop:20}}>
                   <ImageBackground  source={vectorfour}style={{width:155,height:100,marginTop:15,marginLeft:-1}}>
                       <Image source={setting} style={{width:18.15,height:17,marginLeft:14,marginTop:37}}></Image>
                       <Text style={{fontSize:16,color:'white',marginTop:4,marginLeft:12}}>Trigger Plan</Text>
                    </ImageBackground>
                  </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={{width:153,height:105,borderRadius:20,backgroundColor:"#B1B1B1",marginLeft:25,marginTop:20}}>
                   <ImageBackground  source={vectorfive}style={{width:153,height:100,marginTop:15}}>
                   <Image source={premium} style={{color:'white',width:19.5,height:17,marginTop:-12,marginLeft:120}}></Image>
                       <Image source={flg} style={{width:18.15,height:17,marginLeft:14,marginTop:37}}></Image>
                       <Text style={{fontSize:16,color:'white',marginTop:4,marginLeft:12}}>Goal Trainer</Text>
                   </ImageBackground>
                  </TouchableOpacity>
              </View> 
            </View>
        )
    }
}
