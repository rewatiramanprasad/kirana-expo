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
import { Searchbar, Button, useTheme,Icon } from 'react-native-paper'
import SearchBar from '../components/list/Searchbar'
import ActionButton from '../components/list/ActionButton'
import StatsCard from '../components/list/StatsCard'
import CustomerCard from '../components/list/CustomerCard'
import { FAB } from 'react-native-paper'


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


// Main Members Screen
const MemberList = () => {
  const theme=useTheme()
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
    {
      id: 6,
      name: 'Ravi Kumar',
      lastTransaction: '3d ago',
      itemCount: 5,
      dueAmount: '12,450',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 7,
      name: 'Mohit Verma',
      lastTransaction: '4d ago',
      itemCount: 12,
      dueAmount: '3,200',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 8,
      name: 'Sana Iqbal',
      lastTransaction: '5d ago',
      itemCount: 2,
      dueAmount: '850',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 9,
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
      <View className="bg-background p-4">
        <Text className="!text-mutedText text-xl font-bold mb-4">Members</Text>

        {/* Search Bar */}
        <SearchBar
          placeholder="Search name or phone"
          onSearch={setSearchQuery}
        />

        {/* Action Buttons */}
        <View className="flex-row  justify-between  ">
          <ActionButton icon="login" label="High to Low" onPress={() => {}} />
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
            member={member}
            key={member.id}
            name={member.name}
            lastTransaction={member.lastTransaction}
            itemCount={member.itemCount}
            dueAmount={member.dueAmount}
            avatarUri={member.avatar}
          />
        ))}

        {/* Footer */}
      </ScrollView>

      {/* Add Member Button */}

      {/* <View className=" absolute  bottom-4 right-4">
        <Button
          mode="contained"
          icon="account-plus"
          buttonColor={theme.colors.primary}
          textColor="#FFFFFF"
          onPress={() => {}}
          className="!w-6 rounded-full "
        >
          Add Member
        </Button>
      </View> */}
      <FAB
        icon="account-plus"
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
          backgroundColor: theme.colors.primary,
        }}
        color="#FFFFFF"
        onPress={() => {}}
      />
    </View>
  )
}

export default MemberList