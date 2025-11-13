import React from 'react'
import { View, Text } from 'react-native'

// Section Header Component
export const SectionHeader = ({ title }) => (
  <View className="p-2 px-4 pb-3">
    <Text className="text-gray-400 text-sm font-medium uppercase tracking-wider">
      {title}
    </Text>
  </View>
)
