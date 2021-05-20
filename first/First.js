import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import img from '../first/img.png';
import imgg from '../first/imgg.png';

export default class First extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#253334", height: 820, width: 391 }}>
                <View>
                    <ImageBackground source={img} style={{ height: 820, width: 391 }}>
                        <Image source={imgg} style={{ marginLeft: 12, marginTop: 160 }}></Image>
                    </ImageBackground>
                </View>
            </View>

        )
    }
}
