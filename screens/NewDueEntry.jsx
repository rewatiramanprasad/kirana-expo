import React from 'react'
import {
  ScrollView,
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native'
import Profile from '../components/memberDetails/Profile'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Feather from '@expo/vector-icons/Feather'

function NewDueEntry() {
  let data = {
    avatar: 'https://i.pravatar.cc/150?img=1',
    dueAmount: '8,750',
    id: 1,
    itemCount: 8,
    lastTransaction: '2d ago',
    name: 'Neha Gupta',
  }
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Profile member={data} />
      <Text className="text-md py-2 tracking-wide text-mutedText">Type</Text>
      <View className=" flex flex-row justify-between bg-cardBackground p-2 rounded-2xl mb-6">
        <TouchableOpacity className="flex flex-row gap-2 w-1/2 !bg-primary p-4 rounded-2xl ">
          <Feather name="info" size={24} color="black" />
          <Text className="text-background text-lg">{'Purchase(Due)'}</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" flex flex-row gap-2 w-1/2 bg-input p-4 rounded-2xl ">
          <MaterialCommunityIcons
            name="contactless-payment-circle-outline"
            size={24}
            color="white"
          />
          <Text className="text-white text-lg">Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default NewDueEntry
