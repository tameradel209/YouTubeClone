import React from 'react'
import {View, Text } from 'react-native'
import { WebView, } from 'react-native-webview';
import constants from "expo-constants";

function VideoPlayer({route}) {

      const videoId = route.params.videoId

    return (
      <View>
        <View style={{marginTop:constants.statusBarHeight, width:'100%', height:200}}>
          <WebView
            source={{uri:`https://www.youtube.com/embed/${videoId}`}}
            style={{marginTop: 20}}
          />
        </View>
        <View style={{height:100}}><Text style={{color:'#fff'}}>empty string</Text></View>
      </View>

      )
  }

  export default VideoPlayer