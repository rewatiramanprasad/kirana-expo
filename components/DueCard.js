// import React from 'react'

// export default function MaxDuesCard({
//   name = 'Ravi Kumar',
//   amount = 12450,
//   lastUpdated = '2d ago',
//   avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
// }) {
//   return (
//     <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 w-64 shadow-2xl border border-slate-700">
//       {/* Header */}
//       <div className="text-slate-400 text-sm font-medium mb-4">
//         Max Dues Person
//       </div>

//       {/* Profile Section */}
//       <div className="flex items-start gap-3 mb-4">
//         <img
//           src={avatarUrl}
//           alt={name}
//           className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-600"
//         />
//         <div className="flex-1">
//           <h3 className="text-white text-lg font-semibold leading-tight">
//             {name}
//           </h3>
//           <p className="text-slate-400 text-xs mt-1">
//             Last updated {lastUpdated}
//           </p>
//         </div>
//       </div>

//       {/* Amount */}
//       <div className="text-white text-3xl font-bold">
//         ₹ {amount.toLocaleString('en-IN')}
//       </div>
//     </div>
//   )
// }

import React from 'react'
import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Avatar,
  AvatarImage,
} from '@gluestack-ui/themed'

export default function MaxDuesCard({
  name = 'Ravi Kumar',
  amount = 12450,
  lastUpdated = '2d ago',
  avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
}) {
  return (
    <Box
      bg="$backgroundDark900"
      borderRadius="$2xl"
      p="$6"
      width={256}
      shadowColor="$black"
      shadowOffset={{ width: 0, height: 4 }}
      shadowOpacity={0.3}
      shadowRadius={8}
      elevation={8}
      borderWidth="$1"
      borderColor="$borderDark700"
    >
      {/* Header */}
      <Text color="$textLight400" fontSize="$sm" fontWeight="$medium" mb="$4">
        Max Dues Person
      </Text>

      {/* Profile Section */}
      <HStack space="md" alignItems="flex-start" mb="$4">
        <Avatar size="md" borderWidth="$2" borderColor="$borderDark600">
          <AvatarImage source={{ uri: avatarUrl }} alt={name} />
        </Avatar>

        <VStack flex={1}>
          <Text
            color="$white"
            fontSize="$lg"
            fontWeight="$semibold"
            lineHeight="$sm"
          >
            {name}
          </Text>
          <Text color="$textLight400" fontSize="$xs" mt="$1">
            Last updated {lastUpdated}
          </Text>
        </VStack>
      </HStack>

      {/* Amount */}
      <Text color="$white" fontSize="$3xl" fontWeight="$bold">
        ₹ {amount.toLocaleString('en-IN')}
      </Text>
    </Box>
  )
}
