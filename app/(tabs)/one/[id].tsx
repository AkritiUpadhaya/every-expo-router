import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function page() {
    const {id}= useLocalSearchParams<{id:string}>()
  return (
    <View>
      <Text>hi: {id}</Text>
    </View>
  )
}