import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Rootlayout() {
  return (
   <Stack>
    <Stack.Screen  name='index' options={{title:'Login'}}/>
    <Stack.Screen  name='(tabs)' options={{headerShown:false}}/>
    <Stack.Screen  name='modal' options={{presentation:'modal', headerShown:false}}/>
   </Stack>
  )
}