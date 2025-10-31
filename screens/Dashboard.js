import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Box, HStack, VStack, Text, Pressable } from '@gluestack-ui/themed'
import { Feather } from '@expo/vector-icons'

// Max Dues Card Component
const MaxDuesCard = ({
  title = 'Max Dues Person',
  name,
  amount,
  lastUpdated,
  avatarUrl,
}) => {
  return (
    <Box
      bg="$backgroundDark800"
      borderRadius="$2xl"
      p="$5"
      flex={1}
      borderWidth="$1"
      borderColor="$borderDark700"
    >
      <Text color="$textLight400" fontSize="$sm" fontWeight="$medium" mb="$4">
        {title}
      </Text>

      <HStack space="md" alignItems="flex-start" mb="$4">
        <Box
          width={48}
          height={48}
          borderRadius="$full"
          borderWidth="$2"
          borderColor="$borderDark600"
          overflow="hidden"
          bg="$backgroundDark700"
        >
          <Box width={48} height={48} bg="$backgroundDark600" />
        </Box>

        <VStack flex={1}>
          <Text color="$white" fontSize="$lg" fontWeight="$semibold">
            {name}
          </Text>
          <Text color="$textLight400" fontSize="$xs" mt="$1">
            Last updated {lastUpdated}
          </Text>
        </VStack>
      </HStack>

      <Text color="$white" fontSize="$3xl" fontWeight="$bold">
        ₹ {amount.toLocaleString('en-IN')}
      </Text>
    </Box>
  )
}

// Total Due Amount Card Component
const TotalDueAmountCard = ({
  amount,
  customerCount,
  percentageChange,
  isIncrease,
}) => {
  return (
    <Box
      bg="$backgroundDark800"
      borderRadius="$2xl"
      p="$6"
      borderWidth="$1"
      borderColor="$borderDark700"
    >
      <HStack justifyContent="space-between" alignItems="flex-start">
        <VStack space="xs">
          <Text color="$textLight400" fontSize="$md" fontWeight="$normal">
            Total Due Amount
          </Text>

          <Text
            color="$white"
            fontSize="$4xl"
            fontWeight="$bold"
            lineHeight="$4xl"
          >
            ₹ {amount.toLocaleString('en-IN')}
          </Text>

          <Text
            color="$textLight500"
            fontSize="$sm"
            fontWeight="$normal"
            mt="$1"
          >
            Across {customerCount} customers
          </Text>
        </VStack>

        <Box
          bg="$emerald500"
          borderRadius="$full"
          px="$4"
          py="$2"
          flexDirection="row"
          alignItems="center"
          gap="$1"
        >
          <Feather name="trending-up" size={16} color="white" />
          <Text color="$white" fontSize="$sm" fontWeight="$semibold">
            +{percentageChange}%
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}

// Tab Button Component
const TabButton = ({ icon, label, isActive, onPress }) => {
  return (
    <Pressable onPress={onPress} flex={1}>
      <VStack alignItems="center" space="xs" py="$3">
        <Feather
          name={icon}
          size={24}
          color={isActive ? '#06b6d4' : '#94a3b8'}
        />
        <Text
          fontSize="$xs"
          fontWeight="$medium"
          color={isActive ? '$cyan500' : '$textLight400'}
        >
          {label}
        </Text>
      </VStack>
    </Pressable>
  )
}

// Bottom Tab Navigation Component
const BottomTabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'Dashboard', icon: 'pie-chart', label: 'Dashboard' },
    { id: 'List', icon: 'users', label: 'List' },
    { id: 'NewMember', icon: 'user-plus', label: 'NewMember' },
    { id: 'ContactList', icon: 'tablet', label: 'ContactList' },
    { id: 'Action', icon: 'settings', label: 'Action' },
  ]

  return (
    <Box
      bg="$backgroundDark900"
      borderTopWidth="$1"
      borderTopColor="$borderDark800"
    >
      <HStack>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            isActive={activeTab === tab.id}
            onPress={() => onTabChange?.(tab.id)}
          />
        ))}
      </HStack>
    </Box>
  )
}

// Main Dashboard Screen
export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  return (
    <Box flex={1} bg="$backgroundDark950">
      {/* Header */}
      <Box
        bg="$backgroundDark900"
        pt="$12"
        pb="$4"
        px="$5"
        borderBottomWidth="$1"
        borderBottomColor="$borderDark800"
      >
        <HStack justifyContent="space-between" alignItems="center" mb="$4">
          <HStack space="sm" alignItems="center">
            <Feather name="credit-card" size={24} color="#06b6d4" />
            <Text color="$white" fontSize="$2xl" fontWeight="$bold">
              Dues Tracker
            </Text>
          </HStack>

          <Pressable>
            <HStack space="xs" alignItems="center" px="$3" py="$2">
              <Feather name="download" size={18} color="#94a3b8" />
              <Text color="$textLight400" fontSize="$sm" fontWeight="$medium">
                Export
              </Text>
            </HStack>
          </Pressable>
        </HStack>

        <HStack space="xs" alignItems="center">
          <Feather name="info" size={18} color="#06b6d4" />
          <Text color="$textLight300" fontSize="$sm">
            Overview of outstanding dues
          </Text>
        </HStack>
      </Box>

      {/* Content */}
      <ScrollView>
        <VStack p="$5" space="lg">
          {/* Dashboard Label */}
          <Text color="$textLight500" fontSize="$lg" fontWeight="$medium">
            Dashboard
          </Text>

          {/* Max and Min Dues Cards */}
          <HStack space="md">
            <MaxDuesCard
              title="Max Dues Person"
              name="Ravi Kumar"
              amount={12450}
              lastUpdated="2d ago"
            />

            <MaxDuesCard
              title="Min Dues Person"
              name="Anita Shah"
              amount={450}
              lastUpdated="1d ago"
            />
          </HStack>

          {/* Total Due Amount Card */}
          <TotalDueAmountCard
            amount={84920}
            customerCount={58}
            percentageChange={3.2}
            isIncrease={true}
          />
        </VStack>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomTabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </Box>
  )
}
