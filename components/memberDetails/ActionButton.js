import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'

const ActionButtons = () => {
  const handleMarkAsSettled = () => {
    console.log('Mark as Settled pressed')
  }

  const handleNewEntry = () => {
    console.log('New Entry pressed')
  }

  return (
    <View className="!bg- p-4 pb-8 ">
      <Text className="text-mutedText text-lg  mb-3 tracking-wide">
        Actions
      </Text>

      <View className="flex-row justify-between gap-4">
        {/* Mark as Settled Button */}
        <TouchableOpacity
          className="flex-1 flex-row items-center bg-[#122b38] py-3 px-2 rounded-lg"
          onPress={handleMarkAsSettled}
          activeOpacity={0.7}
        >
          <IconButton
            icon="archive-outline"
            size={20}
            iconColor="#00BCD4"
            style={{ margin: 0, padding: 0 }}
          />
          <Text className="text-primary text-base font-medium ">
            Settled
          </Text>
        </TouchableOpacity>

        {/* New Entry Button */}
        <TouchableOpacity
          className="flex-1 flex-row items-center !bg-primary py-3 px-4 rounded-lg"
          onPress={handleNewEntry}
          style={{ backgroundColor: '#00BCD4' }}
          activeOpacity={0.7}
        >
          <IconButton
            icon="plus"
            size={20}
            iconColor="#0a2332"
            style={{ margin: 0, padding: 0 }}
          />
          <Text className="text-[#0a2332] text-base font-medium ml-1">
            New Entry
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ActionButtons
