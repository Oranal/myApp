import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import DayScreen from './DayScreen';

const HomeNavigator = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <NavigationContainer independent={true}>
      <HomeNavigator.Navigator initialRouteName="Weakly Diary" >
        <HomeNavigator.Screen name="Weakly Diary" component={Home} />
        <HomeNavigator.Screen name="Daily routine" component={DayScreen} />
      </HomeNavigator.Navigator>
    </NavigationContainer>

    // <Home />
  )
}

export default HomeStack
