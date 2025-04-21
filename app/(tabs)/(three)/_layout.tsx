import { View, Text } from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer'

export default function threeLayout() {
  return(
    <Drawer>
        <Drawer.Screen name='drawer1' options={{headerTitle:'all friends', drawerLabel:'Friends'}}/>
    </Drawer>
  )
}