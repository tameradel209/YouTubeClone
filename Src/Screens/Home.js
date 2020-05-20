import React from 'react';
import { View, FlatList } from 'react-native';
import Card from '../Components/Card'
import { useSelector } from "react-redux"
import Header from "../Components/Header";

function Home() {

    const data = useSelector(state => state.Data.data)

  return (
      <View >
        <Header />
        <FlatList 
            data={data}
            renderItem={({item}) => <Card item={item} />}
            keyExtractor={(item) => item.id.videoId}
            />          
      </View>
  )
}


export default Home