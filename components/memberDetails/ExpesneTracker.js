import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Chip } from 'react-native-paper'
import ExpenseCard from './ExpenseCard.js'

export default function ExpenseTracker() {
  const expenses = [
    {
      id: 1,
      title: 'Purchase',
      amount: 1650,
      time: '2d ago',
      items: 'Milk, Rice, Pulses, Oil...',
      status: 'Due added',
      statusColor: 'amber',
    },
    {
      id: 2,
      title: 'Payment Received',
      amount: 1000,
      time: '6d ago',
      items: 'Cash at counter',
      status: 'Payment',
      statusColor: 'green',
    },
    {
      id: 3,
      title: 'Purchase',
      amount: 2400,
      time: '9d ago',
      items: 'Vegetables and essentials',
      status: 'Settled',
      statusColor: 'yellow',
    },
  ]

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} {...expense} />
        ))}
      </ScrollView>
    </View>
  )
}
