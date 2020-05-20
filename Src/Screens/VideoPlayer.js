import React from 'react'
import {View } from 'react-native'
import { WebView } from 'react-native-webview';
import constants from "expo-constants";

function VideoPlayer({route}) {
      const videoId = route.params.videoId
      return (
        <View style={{marginTop:constants.statusBarHeight, width:'100%', height:200}}>
          <WebView
            source={{uri:`https://www.youtube.com/embed/${videoId}`}}
            style={{marginTop: 20}}
          />          
        </View>

      )
  }

  export default VideoPlayer