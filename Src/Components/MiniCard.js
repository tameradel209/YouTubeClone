import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation , useTheme} from "@react-navigation/native";


function MiniCard(props) {
    const item = props.item
    const {colors} = useTheme()
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('VideoPlayer', {videoId: item.id.videoId})}>
        <View style={{height:120, elevation:4, backgroundColor:colors.headerColor, flexDirection:'row', margin:10, marginBottom:0}}>
            <View style={{flex:2}}>
            <Image source={{uri:item.snippet.thumbnails.default.url}} style={{flex:1}} />
            </View>
            <View style={{flex:3, marginLeft:10, backgroundColor:colors.headerColor}}>
                <Text numberOfLines={3} ellipsizeMode='tail' style={{fontSize:20, color:colors.iconColor}}>{item.snippet.title}</Text>
                <Text style={{color:colors.iconColor}}>{item.snippet.channelTitle}</Text>
                <Text style={{color:colors.iconColor}}>{item.snippet.publishTime}</Text>
            </View>
        </View>            
        </TouchableWithoutFeedback>
  )

}

export default MiniCard