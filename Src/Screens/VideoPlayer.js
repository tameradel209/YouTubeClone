import React from 'react'
import {View, Text, Image, FlatList } from 'react-native'
import { WebView, } from 'react-native-webview';
import constants from "expo-constants";
import {useSelector} from 'react-redux'
import { Ionicons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import Card from '../Components/Card'
import { ScrollView } from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native'

const ListHeaderComponent = (item) =>{
  const {colors} = useTheme()
  return(
    <View>
      <View style={{height:70, width:'100%', flexDirection:'row'}}>
        <View style={{flex:10}}>
          <Text numberOfLines={2} style={{fontSize:20, marginHorizontal:5, color:colors.iconColor}}>{item.snippet.description}</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Ionicons name='md-arrow-dropdown' size={24} color={colors.iconColor} />            
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <AntDesign name='like1' size={24} color={colors.iconColor} /> 
        <AntDesign name='dislike1' size={24} color={colors.iconColor} /> 
        <Ionicons name='md-share-alt' size={24} color={colors.iconColor} /> 
        <Entypo name='arrow-with-circle-down' size={24} color={colors.iconColor} /> 
        <MaterialCommunityIcons name='library-plus' size={24} color={colors.iconColor} /> 
      </View>
      <View style={{borderTopWidth:1,borderBottomWidth:1,margin:5, flexDirection:'row', alignItems:'center'}}>
        <View style={{margin:5}}>
          <Image source={{uri:item.snippet.thumbnails.default.url}} style={{width:48, height:48, borderRadius:24}} />
        </View>
        <Text style={{marginLeft:5, fontSize:18, color:colors.iconColor}}>{item.snippet.channelTitle}</Text>
      </View>
    </View>
)
}


function VideoPlayer({route}) {


      const item = route.params.item

      const data = useSelector(state => state.Data.data)

    return (
      <View>
        <View style={{marginTop:constants.statusBarHeight, width:'100%', height:200}}>
          <WebView
            source={{uri:`https://www.youtube.com/embed/${item.id.videoId}`}}
            style={{marginTop: 20}}
          />
        </View>
        <View>
          <FlatList
              ListHeaderComponent={ListHeaderComponent(item)}
              data={data}
              renderItem={({item}) => <Card item={item} />}
              keyExtractor={(item) => item.id.videoId}
              //onScroll={ e => console.log(e.nativeEvent.contentOffset.y)}
              />          
        </View>

      </View>
      )
  }

  export default VideoPlayer