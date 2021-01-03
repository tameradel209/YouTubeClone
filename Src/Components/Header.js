import React, {useState} from 'react'
import {View, Text, StyleSheet, Dimensions, Modal, TouchableWithoutFeedback} from 'react-native'
import {Ionicons, Octicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { useNavigation, useTheme } from "@react-navigation/native";
import {useDispatch, useSelector} from 'react-redux'
import * as ActionTypes from '../Redux/ActionTypes'
import ConnectDevice from '../Screens/ConnectDevice'
import * as Permissions from 'expo-permissions'

function Header(){

    const [ConnectModal, setConnectModal] = useState(false)
    const currantTheme = useSelector(state => state.Theme)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const {colors} = useTheme()
    const toggleTheme = ()=>{
        dispatch({type:ActionTypes.CHANGE_THEME, payload:!currantTheme})
    }

    const getPermission = async()=>{
        let cameraPermission = await Permissions.getAsync(Permissions.CAMERA)
        if(cameraPermission.status){
            cameraPermission = await Permissions.askAsync(Permissions.CAMERA)
            console.log(cameraPermission)
        }
    }

    return(
        <View style={{...styles.container, backgroundColor:colors.headerColor}}>
            <View style={styles.innerView1}>
                <MaterialIcons name='account-circle' size={24} color={colors.iconColor} onPress={() => toggleTheme()}/>
                <Ionicons name='md-search' size={24} color={colors.iconColor} onPress={() => navigation.navigate('Search')} />
                <Ionicons name='md-videocam' size={24} color={colors.iconColor} onPress={() => getPermission()} />
                <MaterialIcons name='cast-connected' size={24} color={colors.iconColor} onPress = {() => setConnectModal(true)} />
            </View>
            <View style={styles.innerView2}>
                <Entypo name='youtube' size={30} color='red' />
                <Text style={{fontSize:22, fontWeight:'bold', color:colors.iconColor}}> YouTube</Text>
            </View>
            <Modal 
                onRequestClose={() => setConnectModal(false)} 
                animationType='slide' 
                transparent={true} 
                visible={ConnectModal}
                onDismiss={() => setConnectModal(false)} 
                >
                <View style={{position:'absolute', bottom:0, width:'100%', height:'30%', backgroundColor:'#fff'}}>
                    <View style={{margin:20, marginLeft:5}}><Text style={{fontSize:20}}>Connect a Device</Text></View>
                    <View style={{margin:5, flexDirection:'row'}}>
                        <Octicons name='device-desktop' size={24} color='black'/>
                        <Text style={{marginLeft:50}}>AirPlay & Bluetooth devices</Text>
                    </View>
                    <View style={{margin:5, flexDirection:'row'}}>
                        <MaterialIcons name='info' size={24} color='black'/>
                        <Text style={{marginLeft:50}}>more informations</Text>
                    </View>
                    <View style={{margin:5, flexDirection:'row'}}>
                        <MaterialIcons name='devices' size={24} color='black'/>
                        <Text style={{marginLeft:50}}>connect with TV key</Text>
                    </View>

                        <TouchableWithoutFeedback onPress={()=>setConnectModal(false)}>
                            <View style={{flex:1, flexDirection:'row', borderWidth:1, alignItems:'center', }}>
                                <Entypo name='cross' size={24} color={colors.iconColor} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:50}}>Cancel</Text>
                            </View>
                        </TouchableWithoutFeedback>                        


                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:Constants.statusBarHeight,
        marginBottom:10, 
        flexDirection:'row',
        justifyContent:'space-between',
        width:Dimensions.get('screen').width,
        alignItems:'center',
        height:45,
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