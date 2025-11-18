import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

function Filter() {
    const iconSize = 16;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
      }}
    >
      <Text className="text-md py-2 tracking-wide text-mutedText">
        Recent Activity
      </Text>
      <View
        className=" mt-4 bg-cardBackground p-2 !rounded-2xl"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Ionicons name="filter" size={iconSize} color="#00BCD4" />
        <Text className="text-md  text-primary">All</Text>
      </View>
      <View
        className=" mt-4 bg-cardBackground  p-2 !rounded-2xl"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <MaterialCommunityIcons
          name="content-copy"
          size={iconSize}
          color="#00BCD4"
        />
        <Text className="text-md  text-primary">Due</Text>
      </View>
      <View
        className=" mt-4 bg-cardBackground p-2 rounded-2xl"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <MaterialCommunityIcons
          name="content-copy"
          size={iconSize}
          color="#00BCD4"
        />
        <Text className="text-md  text-primary">Paid</Text>
      </View>
    </View>
  )
}

export default Filter
