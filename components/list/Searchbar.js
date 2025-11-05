import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'
import { Icon } from 'react-native-paper'
const SearchBar = ({ value, onChangeText, placeholder }) => (
  <View className="px-4 py-3">
    <View className="flex-row items-center bg-input border border-border rounded-full px-4 ">
      <Icon source="magnify" size={20} color="#9CA3AF" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#6B7280"
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-3 text-white text-base"
      />
    </View>
  </View>
)

export default SearchBar