import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Chip } from 'react-native-paper'

 const ExpenseCard = ({ title, amount, time, items, status, statusColor }) => {
  return (
    <Card
      className="mb-4 rounded-2xl"
      style={{
        backgroundColor: '#0a2332',
        borderWidth: 1,
        borderColor: '#1a3a4a',
      }}
    >
      <Card.Content className="p-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="text-white text-lg font-semibold flex-1">
            {title}
          </Text>
          <Text className="text-white text-xl font-bold">
            ₹ {amount.toLocaleString()}
          </Text>
        </View>

        <Text className="text-gray-400 text-sm mb-3">
          {time} • {items}
        </Text>

        <Chip
          mode="flat"
          textStyle={{
            color:
              status === 'Due added'
                ? '#d97706'
                : status === 'Payment'
                  ? '#10b981'
                  : '#eab308',
            fontSize: 12,
            fontWeight: '600',
          }}
          style={{
            backgroundColor:
              status === 'Due added'
                ? '#78350f'
                : status === 'Payment'
                  ? '#064e3b'
                  : '#713f12',
            alignSelf: 'flex-start',
            height: 32,
            border: 1,
            borderColor:
              status === 'Due added'
                ? '#78350f'
                : status === 'Payment'
                  ? '#064e3b'
                  : '#713f12',
          }}
          icon={
            status === 'Payment'
              ? 'check'
              : status === 'Settled'
                ? 'check'
                : 'clock-outline'
          }
        >
          {status}
        </Chip>
      </Card.Content>
    </Card>
  )
}
export default ExpenseCard