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

        <Link href={'/(tabs)/one'} asChild>
        <Button title='Go to tab pages'/>
        </Link>

        <Link href={'/modal'} asChild>
        <Button title='Go to modal'/>
        </Link>

        <Link href={'/(aux)/disclaimer'} asChild>
        <Button title='disclaimer page'/>
        </Link>
       
    </View>
  )
}