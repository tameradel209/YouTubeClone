import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './Src/Screens/Home'
import Search from './Src/Screens/Search'
import Explore from './Src/Screens/Explore'
import Library from './Src/Screens/Library'
import Mail from './Src/Screens/Mail'
import Subscribe from './Src/Screens/Subscribe'
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Provider, useSelector} from 'react-redux'
import {ConfigureStore} from './Src/Redux/Store'
import VideoPlayer from './Src/Screens/VideoPlayer'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const store = ConfigureStore()

const myDarkThem ={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'#121212',
    iconColor:'#fff'
  }
}

const myDefaultThem ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:'white',
    iconColor:'#000'
  }
}

function Root () {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='VideoPlayer' component={VideoPlayer} />
    </Stack.Navigator>
  )
}

function Navigation(){

  const toggleTheme = useSelector(state => state.Theme)

  return(
      <NavigationContainer theme={toggleTheme ? myDarkThem : myDefaultThem}>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              switch(route.name){
                case 'Main':
                  return <Ionicons name='md-home' size={size} color={color} />
                case 'Explore':
                  return <MaterialIcons name='explore' size={size} color={color} />
                case 'Library':
                  return <MaterialIcons name='video-library' size={size} color={color} />
                case 'Mail':
                  return <Ionicons name='md-mail' size={size} color={color} />
                case 'Subscribes':
                  return <MaterialIcons name='subscriptions' size={size} color={color}/>
                }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
          }}
        >
        <Tab.Screen name='Main' component={Root} />
        <Tab.Screen name='Explore' component={Explore} />
        <Tab.Screen name='Subscribes' component={Subscribe} />
        <Tab.Screen name='Mail' component={Mail} />
        <Tab.Screen name='Library' component={Library} />
      </Tab.Navigator>
      </NavigationContainer>      

  )
}

export default function App(){
  return(
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
