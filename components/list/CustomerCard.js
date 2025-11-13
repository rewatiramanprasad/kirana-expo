import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Searchbar, Button, Icon } from 'react-native-paper'
const CustomerCard = ({
  name,
  lastTransaction,
  itemCount,
  dueAmount,
  avatarUri,
}) => (
  <TouchableOpacity className="bg-cardBackground rounded-2xl p-4 mb-2">
    <View className="flex-row items-center justify-between">
      {/* Left Section */}
      <View className="flex-row items-center flex-1">
        <Image
          source={{ uri: avatarUri }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="text-white text-sm font-semibold mb-1">{name}</Text>
          <Text className="text-mutedText text-xs">
            Last txn: {lastTransaction} · {itemCount} items
          </Text>
        </View>
      </View>

      {/* Right Section */}
      <View className="flex-row items-center bg-[#112d40] !rounded-full p-2">
        <Icon source="clock-outline" size={14} color="#00BCD4" />
        <Text className="text-primary text-xs font-medium ml-1 mr-2">Due</Text>
      </View>
      <Text className="text-white text-base font-bold">₹ {dueAmount}</Text>
    </View>
  </TouchableOpacity>
)

export default CustomerCard