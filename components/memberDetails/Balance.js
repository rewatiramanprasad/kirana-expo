import React from 'react'
import { View, Text } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
export default function Balance() {
  return (
    <View
      className="bg-cardBackground border border-border rounded-2xl px-4 py-2 "
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
      }}
    >
      <FontAwesome name="balance-scale" size={24} color="white" />
      <View>
        <Text className="text-md text-white font-extrabold">
          Outstanding: ₹8,750
        </Text>
        <Text className="text-mutedText">Credit limit: ₹10,000</Text>
      </View>
      <View
        className=" mt-4 bg-input p-2 rounded-2xl"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <FontAwesome6 name="clock-rotate-left" size={16} color="#00BCD4" />
        <Text className="text-md  text-primary">Ledger</Text>
      </View>
    </View>
  )
}
