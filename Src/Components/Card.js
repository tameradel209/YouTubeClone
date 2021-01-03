import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import {useNavigation, useTheme} from '@react-navigation/native'

function Card(props) {
    const item = props.item
    const {colors} = useTheme()
    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('VideoPlayer', {item})}>
            <View style={{height:350, elevation:4, backgroundColor:colors.headerColor}}>
                <Image source={{uri:item.snippet.thumbnails.high.url}} style={{width:'100%', height:250}} />
                <View style={{marginTop:10, marginLeft:10, flexDirection:'row'}}>
                    <Image source={{uri:item.snippet.thumbnails.high.url}} style={{width:48, height:48, borderRadius:24}} />
                    <View style={{flex:1, marginLeft:10, backgroundColor:colors.headerColor}}>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize:20, width:'95%', color:colors.iconColor}}>{item.snippet.description}</Text>
                        <Text style={{color:colors.iconColor}}>{item.snippet.channelTitle}</Text>
                        <Text style={{fontSize:14, color:colors.iconColor}}>{item.snippet.publishTime}</Text>
                    </View>
                    <Entypo name='dots-three-vertical' size={20} color='black' style={{marginRight:15}}/>
                </View>
            </View>
        </TouchableWithoutFeedback>


  )

}

export default Card