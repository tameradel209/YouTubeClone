import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import {Ionicons, Entypo, MaterialIcons, FontAwesome} from '@expo/vector-icons'
import MiniCard from '../Components/MiniCard'
import Constants from 'expo-constants'
import { useSelector, useDispatch } from "react-redux";
import {fetchData} from '../API'
import * as ActionTypes from "../Redux/ActionTypes";
import {useTheme} from '@react-navigation/native'

function Search(props) {

    const {colors} = useTheme()

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const State = useSelector(state => state.Data)

    const getData = async() =>{

        dispatch({type:ActionTypes.LOADING})

        try{
        const response = await fetchData(search)
        dispatch({type:ActionTypes.FETCH_DATA, payload:response})
        }
        catch(err){
            dispatch({type:ActionTypes.ERROR, payload:err.message})
        }
    }

    return(
        <View style={{flex:1}}>
            <View style={{...styles.container, backgroundColor:colors.headerColor}}>
                <Ionicons name='md-arrow-back' size={24} color={colors.iconColor} onPress={() => props.navigation.goBack()} />
                <TextInput style={{width:'60%', color:colors.iconColor}} placeholder='search YouTube' value={search} onChangeText={(text) => setSearch(text)} />
                <Entypo name='cross' size={24} color={colors.iconColor} onPress={() => setSearch('')} />
                <Ionicons name='md-send' size={24} color={colors.iconColor} onPress={() => getData()} />
                <MaterialIcons name='cast-connected' size={24} color={colors.iconColor} />
                <FontAwesome name='sliders' size={24} color={colors.iconColor} />
            </View>
            {State.loading ? 
                <ActivityIndicator size='large' /> : 
             !State.error ?
                <FlatList
                    data={State.data}
                    renderItem={({item}) => <MiniCard item={item} />}
                    keyExtractor={(item) => item.id.videoId}
                    /> :
                <View style={styles.errView}><Text style={{color:'red'}}>{State.error}</Text></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        flexDirection:'row',
        marginTop:Constants.statusBarHeight,
        alignItems:'center',
        justifyContent:'space-around',
        elevation:4,
    },
    errView:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
    }
  })

  export default Search