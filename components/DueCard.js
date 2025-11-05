// import React from 'react'
// import {
//   Box,
//   HStack,
//   VStack,
//   Text,
//   Image,
//   Avatar,
//   AvatarImage,
// } from '@gluestack-ui/themed'

// export default function MaxDuesCard({
//   name = 'Ravi Kumar',
//   amount = 12450,
//   lastUpdated = '2d ago',
//   avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
// }) {
//   return (
//     <Box
//       bg="$backgroundDark900"
//       borderRadius="$2xl"
//       p="$6"
//       width={256}
//       shadowColor="$black"
//       shadowOffset={{ width: 0, height: 4 }}
//       shadowOpacity={0.3}
//       shadowRadius={8}
//       elevation={8}
//       borderWidth="$1"
//       borderColor="$borderDark700"
//     >
//       {/* Header */}
//       <Text color="$textLight400" fontSize="$sm" fontWeight="$medium" mb="$4">
//         Max Dues Person
//       </Text>

//       {/* Profile Section */}
//       <HStack space="md" alignItems="flex-start" mb="$4">
//         <Avatar size="md" borderWidth="$2" borderColor="$borderDark600">
//           <AvatarImage source={{ uri: avatarUrl }} alt={name} />
//         </Avatar>

//         <VStack flex={1}>
//           <Text
//             color="$white"
//             fontSize="$lg"
//             fontWeight="$semibold"
//             lineHeight="$sm"
//           >
//             {name}
//           </Text>
//           <Text color="$textLight400" fontSize="$xs" mt="$1">
//             Last updated {lastUpdated}
//           </Text>
//         </VStack>
//       </HStack>

//       {/* Amount */}
//       <Text color="$white" fontSize="$3xl" fontWeight="$bold">
//         ₹ {amount.toLocaleString('en-IN')}
//       </Text>
//     </Box>
//   )
// }

import React from 'react'
import { View } from 'react-native'
import { Card, Text, Avatar, useTheme } from 'react-native-paper'

export default function MaxDuesCard({
  title = 'Max Dues Person',
  name,
  amount,
  lastUpdated,
  avatarUrl,
}) {
  const theme = useTheme()

  return (
    <Card
      className="rounded-2xl mb-4 p-2  "
      style={{
        backgroundColor: theme.colors.cardBackground,
        margin:4
      }}
    >
      <Card.Content className="p-2">
        <Text
          className="text-base mb-3"
          style={{ color: theme.colors.mutedText }}
        >
          {title}
        </Text>

        <View className="flex-row items-center mb-3">
          <Avatar.Image size={50} source={{ uri: avatarUrl }} />
          <View className="ml-3">
            <Text
              className="text-lg font-semibold"
              style={{ color: theme.colors.text }}
            >
              {name}
            </Text>
            <Text className="text-xs" style={{ color: theme.colors.mutedText }}>
              Last updated {lastUpdated}
            </Text>
          </View>
        </View>

        <Text
          className="text-2xl font-bold"
          style={{ color: theme.colors.text }}
        >
          ₹ {amount.toLocaleString('en-IN')}
        </Text>
      </Card.Content>
    </Card>
  )
}
