import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Profile from '../components/memberDetails/Profile'
import CardButton from '../components/memberDetails/CardButton '
import { Icon } from 'react-native-paper'
import Contact from '../components/memberDetails/Contact'
import Balance from '../components/memberDetails/Balance'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import Filter from '../components/memberDetails/Filter'
import ExpenseTracker from '../components/memberDetails/ExpesneTracker'
import ActionButtons from '../components/memberDetails/ActionButton'

export default function MemberDetails({ route }) {
  // const { data } = route.params
  let data = {
    avatar: 'https://i.pravatar.cc/150?img=1',
    dueAmount: '8,750',
    id: 1,
    itemCount: 8,
    lastTransaction: '2d ago',
    name: 'Neha Gupta',
  }
  console.log('Member Details Data:', data)
  return (
    <ScrollView className="flex-1 bg-background px-4 py-4 pt-8">
      <Profile member={data} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <CardButton title={'Add Payment'} icon={'rupee'} />
        <CardButton title={'Add Purchase'} icon={'cart-plus'} />
        <CardButton title={'Add Reminder'} icon={'bell-o'} />
      </View>
      <Text className="text-md py-2 tracking-wide text-mutedText">Contact</Text>
      <Contact />
      <Text className="text-md py-2 tracking-wide text-mutedText">Balance</Text>
      <Balance />
      <Filter />
      <ExpenseTracker />
      <ActionButtons />
    </ScrollView>
  )
}
