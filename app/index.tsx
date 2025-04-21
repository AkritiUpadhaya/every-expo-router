import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

export default function Page() {
  return (
    <View>
      <Button onPress={()=>router.push('/register')} title='Open register'/>

        <Link href={'/register'} asChild>
        <Button title='Open register with link'/>
        </Link>
    </View>
  )
}