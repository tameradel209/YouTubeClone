import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { useNavigation, useTheme } from "@react-navigation/native";
import {useDispatch, useSelector} from 'react-redux'
import * as ActionTypes from '../Redux/ActionTypes'
function Header(){

    const currantTheme = useSelector(state => state.Theme)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const {colors} = useTheme()
    const toggleTheme = ()=>{
        dispatch({type:ActionTypes.CHANGE_THEME, payload:!currantTheme})
    }
    return(
        <View style={{...styles.container, backgroundColor:colors.headerColor}}>
            <View style={styles.innerView1}>
                <MaterialIcons name='account-circle' size={24} color={colors.iconColor} onPress={() => toggleTheme()}/>
                <Ionicons name='md-search' size={24} color={colors.iconColor} onPress={() => navigation.navigate('Search')} />
                <Ionicons name='md-videocam' size={24} color={colors.iconColor} />
                <MaterialIcons name='cast-connected' size={24} color={colors.iconColor} />
            </View>
            <View style={styles.innerView2}>
                <Entypo name='youtube' size={30} color='red' />
                <Text style={{fontSize:22, fontWeight:'bold', color:colors.iconColor}}> YouTube</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:60,
        //marginTop:Constants.statusBarHeight,
        marginBottom:10, 
        flexDirection:'row',
        justifyContent:'space-between',
        width:Dimensions.get('screen').width,
        alignItems:'center',
      },
      innerView1:{
          flexDirection:'row', 
          justifyContent:'space-around',
          width:'40%'
      },
      innerView2:{
          flex:1, 
          flexDirection:'row',
          justifyContent:'flex-end',
          marginRight:10
      },
  })

  export default Header