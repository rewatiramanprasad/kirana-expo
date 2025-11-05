import React from 'react'
import { View, Text } from 'react-native'

const InfoCard = ({ amount = '84,920', currency = '₹' }) => {
  return (
    <View className="bg-slate-900 rounded-lg p-4 w-40">
      <Text className="text-gray-400 text-sm mb-2">Total Due</Text>
      <Text className="text-white text-3xl font-bold">
        {currency} {amount}
      </Text>
    </View>
  )
}

export default TotalDueCard
