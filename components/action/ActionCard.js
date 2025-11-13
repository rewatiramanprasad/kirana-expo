import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

// Action Card Component (for grid layout)

export const ActionCard = ({
  icon,
  title,
  description,
  onPress,
  iconColor = '#00BCD4',
}) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-cardBackground !rounded-2xl border border-border p-4 flex-1"
    style={{ minWidth: '48%' }}
  >
    <View className="mb-3">{icon}</View>
    <Text className="text-white text-base font-semibold mb-1">{title}</Text>
    <Text className="text-gray-400 text-xs leading-4">{description}</Text>
  </TouchableOpacity>
)
