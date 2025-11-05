import React from 'react'
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-paper'

const CustomerCard = ({
  name = 'Neha Gupta',
  lastTransaction = '2d ago',
  itemCount = 8,
  dueAmount = '8,750',
  currency = '₹',
  avatarUri,
}) => {
  return (
    <View className="bg-slate-800 rounded-lg p-4 flex-row items-center justify-between">
      {/* Left Section - Avatar and Info */}
      <View className="flex-row items-center flex-1">
        {/* Avatar */}
        <Image
          source={
            avatarUri ? { uri: avatarUri } : require('./default-avatar.png')
          }
          className="w-12 h-12 rounded-full mr-3"
        />

        {/* Customer Info */}
        <View className="flex-1">
          <Text className="text-white text-base font-semibold mb-1">
            {name}
          </Text>
          <Text className="text-gray-400 text-xs">
            Last txn: {lastTransaction} · {itemCount} items
          </Text>
        </View>
      </View>

      {/* Right Section - Due Amount */}
      <View className="flex-row items-center">
        <Icon source="clock-outline" size={16} color="#9CA3AF" />
        <Text className="text-red-400 text-base font-semibold ml-1">Due</Text>
        <Text className="text-white text-lg font-bold ml-2">
          {currency} {dueAmount}
        </Text>
      </View>
    </View>
  )
}

export default CustomerCard
