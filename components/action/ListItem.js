import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-paper'


const ListItem = ({ icon, title, description, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-cardBackground mx-4 mb-3 rounded-2xl border border-border p-4 flex-row items-center justify-between"
  >
    <View className="flex-row items-center flex-1">
      <View className="w-10 h-10 rounded-lg items-center justify-center mr-3">
        {icon}
      </View>
      <View className="flex-1">
        <Text className="text-white text-base font-semibold mb-1">{title}</Text>
        <Text className="text-gray-400 text-xs">{description}</Text>
      </View>
    </View>
    <Icon source="chevron-right" size={20} color="#6B7280" />
  </TouchableOpacity>
)

export default ListItem