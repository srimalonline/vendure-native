import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout(){
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",  
          headerShown: false,}}
      />
      <Tabs.Screen 
        name="settings" 
        options={{ title: "Settings" }} 
      />
    </Tabs>
  )
}