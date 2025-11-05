// import React from 'react'
// import { Box, HStack, VStack, Text } from '@gluestack-ui/themed'
// import { Feather } from '@expo/vector-icons'

// export default function TotalDueAmountCard({
//   amount = 84920,
//   customerCount = 58,
//   percentageChange = 3.2,
//   isIncrease = true,
// }) {
//   return (
//     <Box
//       bg="$backgroundDark900"
//       borderRadius="$2xl"
//       p="$6"
//       shadowColor="$black"
//       shadowOffset={{ width: 0, height: 4 }}
//       shadowOpacity={0.3}
//       shadowRadius={8}
//       elevation={8}
//       borderWidth="$1"
//       borderColor="$borderDark800"
//     >
//       <HStack justifyContent="space-between" alignItems="flex-start">
//         {/* Left Section */}
//         <VStack space="xs">
//           <Text color="$textLight400" fontSize="$md" fontWeight="$normal">
//             Total Due Amount
//           </Text>

//           <Text
//             color="$white"
//             fontSize="$4xl"
//             fontWeight="$bold"
//             lineHeight="$4xl"
//           >
//             ₹ {amount.toLocaleString('en-IN')}
//           </Text>

//           <Text
//             color="$textLight500"
//             fontSize="$sm"
//             fontWeight="$normal"
//             mt="$1"
//           >
//             Across {customerCount} customers
//           </Text>
//         </VStack>

//         {/* Right Section - Percentage Badge */}
//         <Box
//           bg="$emerald500"
//           borderRadius="$full"
//           px="$4"
//           py="$2"
//           flexDirection="row"
//           alignItems="center"
//           gap="$1"
//         >
//           <Feather
//             name={isIncrease ? 'trending-up' : 'trending-down'}
//             size={16}
//             color="white"
//           />
//           <Text color="$white" fontSize="$sm" fontWeight="$semibold">
//             {isIncrease ? '+' : '-'}
//             {percentageChange}%
//           </Text>
//         </Box>
//       </HStack>
//     </Box>
//   )
// }

import React from 'react'
import { View } from 'react-native'
import { Card, Text, IconButton, useTheme } from 'react-native-paper'

export default function TotalDueAmountCard({
  amount,
  customerCount,
  percentageChange,
  isIncrease,
}) {
  const theme = useTheme()
  const trendColor = isIncrease ? '#04231a' : '#EF4444'

  return (
    <Card
      className="rounded-2xl mb-4"
      style={{ backgroundColor: theme.colors.cardBackground }}
    >
      <Card.Content className="p-4">
        <View className="flex-row items-center justify-between m-2">
          <View>
            <Text
              className="text-base mb-1"
              style={{ color: theme.colors.mutedText }}
            >
              Total Due Amount
            </Text>

            <Text
              className="text-3xl font-bold mb-1"
              style={{ color: theme.colors.text }}
            >
              ₹ {amount.toLocaleString('en-IN')}
            </Text>

            <Text
              className="text-sm mb-2"
              style={{ color: theme.colors.mutedText }}
            >
              Across {customerCount} customers
            </Text>
          </View>
          <View className="bg-green-600 flex-row items-center mt-4 pr-4 rounded-full">
            <IconButton
              icon={isIncrease ? 'trending-up' : 'trending-down'}
              iconColor={trendColor}
              size={20}
            />
            <Text
              className="text-sm font-semibold"
              style={{ color: trendColor }}
            >
              {isIncrease ? '+' : '-'}
              {percentageChange}%
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  )
}
