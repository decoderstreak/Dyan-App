import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import relax from '../Sounds/Rectangle.png';
import img1 from '../Sounds/river.png';
import img2 from '../Sounds/mountain.png';
import img3 from '../Sounds/deserts.png';
import img4 from '../Sounds/hills.png';
import { Svg, Path } from 'react-native-svg'
export default class Sounds extends Component {
    render() {
        return (
            <View style={{ height: 825, width: 395, backgroundColor: "black" }}>
                <ImageBackground source={relax} style={{ width: 339, height: 195, marginLeft: 28, marginTop: 131 }}>
                    <Text style={{ fontSize: 25, marginLeft: 22, marginTop: 9 }}>Relax Sounds</Text>
                    <TouchableOpacity style={{ width: 138, height: 35, marginTop: 98, marginLeft: 45, backgroundColor: 'white', borderRadius: 10 }}>
                        <Text style={{ marginLeft: 32, marginTop: 9, fontSize: 14 }}>play now</Text>
                        <View style={{ marginLeft: 101, marginTop: -14 }}>
                            <Svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6.00357 3.04959e-05C2.69293 3.05078e-05 -0.00012208 2.91599 -0.000122092 6.50003C-0.000122104 10.0841 2.69293 13 6.00357 13C9.31421 13 12.0073 10.0841 12.0073 6.50003C12.0073 2.91599 9.31421 3.04839e-05 6.00357 3.04959e-05ZM8.3903 6.72776L4.88815 9.16526C4.84711 9.19408 4.79971 9.20837 4.75281 9.20837C4.71177 9.20837 4.67023 9.19725 4.63311 9.17531C4.55248 9.12771 4.50265 9.03671 4.50265 8.93753L4.50265 4.06253C4.50265 3.96335 4.55248 3.87235 4.63311 3.82475C4.71226 3.77767 4.81144 3.78057 4.88815 3.8348L8.3903 6.2723C8.46164 6.32202 8.50512 6.40799 8.50512 6.50003C8.50512 6.59207 8.46164 6.67802 8.3903 6.72776Z" fill="black" />
                            </Svg></View>
                    </TouchableOpacity>
                </ImageBackground>
             <TouchableOpacity style={{width:299,height:65,borderRadius:20,marginTop:51,marginLeft:48}}>
                 <Image source={img1}></Image>
                 <Text style={{color:'white',marginLeft:84,marginTop:-50,fontSize:18}}>River flowing</Text>
                 <Text style={{marginTop:3,marginLeft:84,color:'white',fontSize:10}}>59899 Listening</Text>
                 <Text style={{marginLeft:250,marginTop:-22,fontSize:10,color:'white'}}>20 Min</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:299,height:65,borderRadius:20,marginTop:21,marginLeft:48}}>
                 <Image source={img2}></Image>
                 <Text style={{color:'white',marginLeft:84,marginTop:-50,fontSize:18}}>Mountaineers</Text>
                 <Text style={{marginTop:3,marginLeft:84,color:'white',fontSize:10}}>45697 Listening</Text>
                 <Text style={{marginLeft:250,marginTop:-22,fontSize:10,color:'white'}}>15 Min</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:299,height:65,borderRadius:20,marginTop:21,marginLeft:48}}>
                 <Image source={img3}></Image>
                 <Text style={{color:'white',marginLeft:84,marginTop:-50,fontSize:18}}>Lovely Deserts</Text>
                 <Text style={{marginTop:3,marginLeft:84,color:'white',fontSize:10}}>9899 Listening</Text>
                 <Text style={{marginLeft:250,marginTop:-22,fontSize:10,color:'white'}}>39 Min</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:299,height:65,borderRadius:20,marginTop:21,marginLeft:48}}>
                 <Image source={img4}></Image>
                 <Text style={{color:'white',marginLeft:84,marginTop:-50,fontSize:18}}>The Hill Sides</Text>
                 <Text style={{marginTop:3,marginLeft:84,color:'white',fontSize:10}}>52599 Listening</Text>
                 <Text style={{marginLeft:250,marginTop:-22,fontSize:10,color:'white'}}>50 Min</Text>
             </TouchableOpacity>
            </View>
        )
    }
}
