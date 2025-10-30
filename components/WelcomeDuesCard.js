import React from 'react'
import { View, Text } from 'react-native'

// interface DuesCardProps {
//   maxDues?: string;
//   minDues?: string;
//   totalDue?: string;
// }

const WelcomeDuesCard = ({ maxDues = '—', minDues = '—', totalDue = '—' }) => {
  return (
    <View className="bg-[#0a1929] rounded-2xl p-5 m-4 shadow-lg">
      {/* Header Section */}
      <View className="mb-6 items-center">
        <Text className="text-2xl font-semibold text-white mb-2">
          Welcome back
        </Text>
        <Text className="text-sm text-gray-400 font-normal">
          Sign in to manage outstanding dues
        </Text>
      </View>

      {/* Dues Information Section */}
      <View className="flex-row justify-between">
        {/* Max Dues */}
        <View className="flex-1 items-start px-2">
          <Text className="text-xs text-gray-400 mb-0.5 font-medium">
            Max Dues
          </Text>
          <Text className="text-[11px] text-gray-400 mb-3">Person</Text>
          <Text className="text-2xl text-white font-light">{maxDues}</Text>
        </View>

        {/* Min Dues */}
        <View className="flex-1 items-start px-2">
          <Text className="text-xs text-gray-400 mb-0.5 font-medium">
            Min Dues
          </Text>
          <Text className="text-[11px] text-gray-400 mb-3">Person</Text>
          <Text className="text-2xl text-white font-light">{minDues}</Text>
        </View>

        {/* Total Due */}
        <View className="flex-1 items-start px-2">
          <Text className="text-xs text-gray-400 mb-0.5 font-medium">
            Total Due
          </Text>
          <Text className="text-[11px] text-gray-400 mb-3"> </Text>
          <Text className="text-2xl text-white font-light">{totalDue}</Text>
        </View>
      </View>
    </View>
  )
}

export default WelcomeDuesCard

// Usage Example:
// <DuesCard maxDues="$1,250" minDues="$120" totalDue="$5,430" />
