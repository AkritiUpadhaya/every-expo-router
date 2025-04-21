import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
export default function one() {
  return (
    <View>
      <Text>tab one</Text>
      <Link href={'/'} replace asChild>
        <Button title='logout'/>
        </Link>


        <Button title='logout with button' onPress={()=>router.replace('/(tabs)/two')} />

        <Link href={'/(tabs)/one/details'}  asChild>
        <Button title='Open details'/>
        </Link>

        <Link href={'/(tabs)/one/23'}  asChild>
        <Button title='Open details 23'/>
        </Link>


    </View>
  )
}