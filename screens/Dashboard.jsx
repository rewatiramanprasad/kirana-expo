// import React, { useState } from 'react'
// import { ScrollView, View } from 'react-native'
// import {
//   Text,
//   Card,
//   Avatar,
//   useTheme,
//   Appbar,
//   Surface,
//   BottomNavigation,
// } from 'react-native-paper'
// import { Feather } from '@expo/vector-icons'

// export default function Dashboard() {
//   const { colors } = useTheme()
//   const [index, setIndex] = useState(0)

//   const routes = [
//     { key: 'dashboard', title: 'Dashboard', icon: 'pie-chart' },
//     { key: 'list', title: 'List', icon: 'account-group' },
//     { key: 'newmember', title: 'New Member', icon: 'account-plus' },
//     { key: 'contactlist', title: 'Contact List', icon: 'contacts' },
//     { key: 'action', title: 'Action', icon: 'cog' },
//   ]

//   const DashboardRoute = () => (
//     <ScrollView style={{ backgroundColor: colors.background }}>
//       {/* Header */}
//       <Appbar.Header style={{ backgroundColor: colors.surface, elevation: 2 }}>
//         <Appbar.Content
//           title="Dues Tracker"
//           titleStyle={{ color: colors.primary, fontWeight: 'bold' }}
//         />
//         <Appbar.Action
//           icon="download"
//           color={colors.text}
//           onPress={() => console.log('Export pressed')}
//         />
//       </Appbar.Header>

//       {/* Body */}
//       <View style={{ padding: 16 }}>
//         <Text
//           style={{
//             color: colors.onSurfaceVariant,
//             fontSize: 18,
//             marginBottom: 12,
//           }}
//         >
//           Dashboard
//         </Text>

//         {/* Max/Min Dues Cards */}
//         <View style={{ flexDirection: 'row', gap: 10 }}>
//           <DuesCard
//             title="Max Dues Person"
//             name="Ravi Kumar"
//             amount={12450}
//             lastUpdated="2d ago"
//           />
//           <DuesCard
//             title="Min Dues Person"
//             name="Anita Shah"
//             amount={450}
//             lastUpdated="1d ago"
//           />
//         </View>

//         {/* Total Due Card */}
//         <TotalDueCard
//           amount={84920}
//           customerCount={58}
//           percentageChange={3.2}
//           isIncrease
//         />
//       </View>
//     </ScrollView>
//   )

//   const renderScene = BottomNavigation.SceneMap({
//     dashboard: DashboardRoute,
//     list: () => <Placeholder title="List Screen" />,
//     newmember: () => <Placeholder title="New Member Screen" />,
//     contactlist: () => <Placeholder title="Contact List Screen" />,
//     action: () => <Placeholder title="Action Screen" />,
//   })

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//       activeColor={colors.primary}
//       inactiveColor={colors.onSurfaceVariant}
//       barStyle={{ backgroundColor: colors.surface }}
//     />
//   )
// }

// const DuesCard = ({ title, name, amount, lastUpdated }) => {
//   const { colors } = useTheme()

//   return (
//     <Card
//       style={{
//         flex: 1,
//         backgroundColor: colors.surface,
//         padding: 12,
//       }}
//     >
//       <Text
//         style={{
//           color: colors.onSurfaceVariant,
//           fontSize: 13,
//           marginBottom: 8,
//         }}
//       >
//         {title}
//       </Text>
//       <View
//         style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}
//       >
//         <Avatar.Text size={48} label={name[0]} />
//         <View style={{ marginLeft: 10 }}>
//           <Text style={{ color: colors.text, fontSize: 16, fontWeight: '600' }}>
//             {name}
//           </Text>
//           <Text style={{ color: colors.onSurfaceVariant, fontSize: 12 }}>
//             Last updated {lastUpdated}
//           </Text>
//         </View>
//       </View>
//       <Text style={{ color: colors.text, fontSize: 22, fontWeight: 'bold' }}>
//         ₹ {amount.toLocaleString('en-IN')}
//       </Text>
//     </Card>
//   )
// }

// const TotalDueCard = ({
//   amount,
//   customerCount,
//   percentageChange,
//   isIncrease,
// }) => {
//   const { colors } = useTheme()

//   return (
//     <Card
//       style={{
//         backgroundColor: colors.surface,
//         marginTop: 16,
//         padding: 16,
//       }}
//     >
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//         <View>
//           <Text style={{ color: colors.onSurfaceVariant, fontSize: 16 }}>
//             Total Due Amount
//           </Text>
//           <Text
//             style={{
//               color: colors.text,
//               fontSize: 30,
//               fontWeight: 'bold',
//               marginVertical: 4,
//             }}
//           >
//             ₹ {amount.toLocaleString('en-IN')}
//           </Text>
//           <Text style={{ color: colors.onSurfaceVariant, fontSize: 13 }}>
//             Across {customerCount} customers
//           </Text>
//         </View>
//         <Surface
//           style={{
//             backgroundColor: isIncrease ? '#06b6d4' : '#ef4444',
//             paddingHorizontal: 10,
//             paddingVertical: 6,
//             borderRadius: 20,
//             flexDirection: 'row',
//             alignItems: 'center',
//           }}
//         >
//           <Feather
//             name={isIncrease ? 'trending-up' : 'trending-down'}
//             size={16}
//             color="white"
//           />
//           <Text style={{ color: 'white', marginLeft: 4, fontWeight: '600' }}>
//             {isIncrease ? '+' : ''}
//             {percentageChange}%
//           </Text>
//         </Surface>
//       </View>
//     </Card>
//   )
// }

// const Placeholder = ({ title }) => {
//   const { colors } = useTheme()
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: colors.background,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Text style={{ color: colors.text, fontSize: 20 }}>{title}</Text>
//     </View>
//   )
// }

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
      <ScrollView contentContainerClassName="p-5">
        <Text
          variant="bodyLarge"
          className="font-bold mb-5"
          style={{ color: theme.colors.text }}
        >
          Dashboard
        </Text>

        <View className="flex-row justify-between ">
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
