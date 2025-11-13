import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Searchbar, Button, Icon } from 'react-native-paper'
const ActionButton = ({ icon, label, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className=" !bg-cardBackground flex-row items-center justify-center p-2 rounded-full"
    style={{ backgroundColor: '#162233' }}
  >
    <Icon source={icon} size={16} color="#9AA8B2" />
    <Text className="!text-mutedText text-xs ml-1">{label}</Text>
  </TouchableOpacity>
)

export default ActionButton