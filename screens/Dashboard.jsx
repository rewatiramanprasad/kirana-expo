import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, useTheme } from 'react-native-paper'
import TotalDueAmountCard from '../components/TotalDueCard.js'
import MaxDuesCard from '../components/DueCard.js'

export default function Dashboard() {
  const theme = useTheme()

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="p-4">
        <Text
          variant="bodyLarge"
          className="font-bold mb-5"
          style={{ color: theme.colors.text }}
        >
          Dashboard
        </Text>

        <View style={{ display: 'flex', flexDirection: 'row', gap: 12 }} >
          <MaxDuesCard
            name="Ravi Kumar"
            amount={12450}
            lastUpdated="2d ago"
            avatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
          />
          <MaxDuesCard
            title="Min Dues Person"
            name="Ravi Kumar"
            amount={12450}
            lastUpdated="2d ago"
            avatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
          />
        </View>
        <TotalDueAmountCard
          amount={84920}
          customerCount={58}
          percentageChange={3.2}
          isIncrease
        />
      </ScrollView>
    </SafeAreaView>
  )
}
