import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='one' options={{tabBarLabel:'home', headerShown:false}}/>
        <Tabs.Screen name='two' options={{tabBarLabel:'address'}}/>
        <Tabs.Screen name='hidden' options={{href:null}}/>
        <Tabs.Screen name='(three)' options={{headerShown:false}}/>
    </Tabs>
  )
}