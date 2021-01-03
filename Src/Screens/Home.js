import React from 'react';
import { View, FlatList, Animated } from 'react-native';
import Card from '../Components/Card'
import { useSelector } from "react-redux"
import Header from "../Components/Header";
import Constants from 'expo-constants'

function Home() {

    const data = useSelector(state => state.Data.data)

/*     const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 45)
    const translateY = scrollY.interpolate({
      inputRange:[0,45],
      outputRange:[0,-45]
    }) */

  return (
      <View>
{/*         <Animated.View 
          style={{
            elevation:4,
            zIndex:100,
            transform:[{translateY}]
          }} 
        >
          <Header />
        </View></Animated.View >
        */}
        <View>
          <Header />
        </View>
        <FlatList 
            data={data}
            renderItem={({item}) => <Card item={item} />}
            keyExtractor={(item) => item.id.videoId}
            //onScroll={ e => console.log(e.nativeEvent.contentOffset.y)}
            />          
      </View>
  )
}


export default Home