// import React from 'react'
// import { ScrollView, Text } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'

// export default function MemberList() {
//     return (
//       <SafeAreaView className="flex-1 bg-background">
//             <ScrollView contentContainerClassName="p-5">
//                 <Text>
//                     Member List Screen
//                 </Text>
//             </ScrollView>
//             </SafeAreaView>
//     // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     //   <Text>Settings!</Text>
//     // </View>
//   )
// }

import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Searchbar, Button, Icon } from 'react-native-paper'
import SearchBar from '../components/list/Searchbar'
import ActionButton from '../components/list/ActionButton'
import StatsCard from '../components/list/StatsCard'

// Search Bar Component
// const SearchBarComponent = ({ placeholder, onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('')

//   const onChangeSearch = (query) => {
//     setSearchQuery(query)
//     if (onSearch) onSearch(query)
//   }

//   return (
//     <View className="px-4 py-2">
//       <Searchbar
//         placeholder={placeholder}
//         onChangeText={onChangeSearch}
//         value={searchQuery}
//         className="bg-slate-700 rounded-lg"
//         iconColor="#9CA3AF"
//         placeholderTextColor="#9CA3AF"
//         inputStyle={{ color: '#FFFFFF' }}
//       />
//     </View>
//   )
// }

// Action Button Component
// Stats Card Component

// Customer Card Component
const CustomerCard = ({
  name,
  lastTransaction,
  itemCount,
  dueAmount,
  avatarUri,
}) => (
  <TouchableOpacity className="bg-slate-800 rounded-lg p-4 mb-2">
    <View className="flex-row items-center justify-between">
      {/* Left Section */}
      <View className="flex-row items-center flex-1">
        <Image
          source={{ uri: avatarUri }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="text-white text-sm font-semibold mb-1">{name}</Text>
          <Text className="text-gray-400 text-xs">
            Last txn: {lastTransaction} · {itemCount} items
          </Text>
        </View>
      </View>

      {/* Right Section */}
      <View className="flex-row items-center">
        <Icon source="clock-outline" size={14} color="#9CA3AF" />
        <Text className="text-red-400 text-xs font-medium ml-1 mr-2">Due</Text>
        <Text className="text-white text-base font-bold">₹ {dueAmount}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

// Main Members Screen
const MemberList = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const members = [
    {
      id: 1,
      name: 'Neha Gupta',
      lastTransaction: '2d ago',
      itemCount: 8,
      dueAmount: '8,750',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Ravi Kumar',
      lastTransaction: '3d ago',
      itemCount: 5,
      dueAmount: '12,450',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Mohit Verma',
      lastTransaction: '4d ago',
      itemCount: 12,
      dueAmount: '3,200',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Sana Iqbal',
      lastTransaction: '5d ago',
      itemCount: 2,
      dueAmount: '850',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 5,
      name: 'Anita Shah',
      lastTransaction: '1d ago',
      itemCount: 1,
      dueAmount: '450',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  ]

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View className="bg-background pt-12 pb-4 px-4">
        <Text className="!text-mutedText text-xl font-bold mb-4">Members</Text>

        {/* Search Bar */}
        <SearchBar
          placeholder="Search name or phone"
          onSearch={setSearchQuery}
        />

        {/* Action Buttons */}
        <View className="flex-row space-x-4 space-y-4 mt-3">
          <ActionButton icon="login"  label="High to Low" onPress={() => {}} />
          <ActionButton icon="upload" label="Unpaid" onPress={() => {}} />
          <ActionButton
            icon="clock-outline"
            label="Recent"
            onPress={() => {}}
          />
        </View>

        {/* Stats Cards */}
        <View className="flex-row gap-3 mt-4">
          <StatsCard label="Total Due" value="₹ 84,920" isPrimary />
          <StatsCard label="Members" value="58" />
        </View>
      </View>

      {/* Members List */}
      <ScrollView className="flex-1 px-4 pt-4">
        {members.map((member) => (
          <CustomerCard
            key={member.id}
            name={member.name}
            lastTransaction={member.lastTransaction}
            itemCount={member.itemCount}
            dueAmount={member.dueAmount}
            avatarUri={member.avatar}
          />
        ))}

        {/* Footer */}
        <Text className="text-gray-500 text-xs text-center py-4">
          Showing 5 of 58
        </Text>
      </ScrollView>

      {/* Add Member Button */}
      <View className="absolute bottom-4 right-4">
        <Button
          mode="contained"
          icon="account-plus"
          buttonColor="#06B6D4"
          textColor="#FFFFFF"
          onPress={() => {}}
          className="rounded-full"
        >
          Add Member
        </Button>
      </View>
    </View>
  )
}

export default MemberList