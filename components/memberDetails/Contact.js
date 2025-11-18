import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
export default function Contact() {
  return (
    <View
      className="bg-cardBackground border border-border rounded-2xl px-4 "
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
      }}
    >
      <Ionicons name="call-outline" size={24} color="white" />
      <View>
        <Text className="text-md  text-white font-extrabold">
          +91 98765 43210
        </Text>
        <Text className="text-mutedText">Tap and hold to copy number</Text>
      </View>
      <View
        className=" mt-4 bg-input p-2 rounded-2xl"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <MaterialCommunityIcons name="content-copy" size={16} color="#00BCD4" />
        <Text className="text-md text-primary">copy</Text>
      </View>
    </View>
  )
}
