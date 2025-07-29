import { Entypo } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

export default function TabsLayout(){
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          paddingBottom: 0,
          paddingTop: 0,
        },
        tabBarLabelStyle: {
          fontSize: moderateScale(12, 0.1),
          marginBottom: moderateScale(5, 0.1),
        }
      }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",  
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={moderateScale(23, 0.1)} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="category" 
        options={{ 
          title: "Category",  
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="grid" size={moderateScale(23, 0.1)} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="cart" 
        options={{ 
          title: "Cart",  
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={moderateScale(23, 0.1)} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile",  
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={moderateScale(23, 0.1)} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
