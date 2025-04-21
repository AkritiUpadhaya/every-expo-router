import { View, Text, Platform, Pressable } from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer'
import { Link, Slot } from 'expo-router'

export default function threeLayout() {
    if(Platform.OS==='web'){
        return(
            <div>

                <div>
                <Link href={'/(tabs)/(three)/drawer1'} asChild>
                <Pressable>
                <Text>Page1</Text>
                </Pressable>
                </Link>
                 </div>

                <div>
                <Link href={'/(tabs)/(three)/drawer2'} asChild>
                <Pressable>
                <Text>Page2</Text>
                </Pressable>
                </Link>
                </div>


                <Slot/>
                </div>
                

        )
    }
    else
  return(
    <Drawer>
        <Drawer.Screen name='drawer1' options={{headerTitle:'all friends', drawerLabel:'Friends'}}/>
    </Drawer>
  )
}