// import React from 'react'
// import { ScrollView, Text } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'

// export default function Action() {
//   return (
//     <SafeAreaView className="flex-1 bg-background">
//       <ScrollView contentContainerClassName="p-5">
//               <Text>Action Screen</Text>

//       </ScrollView>
//     </SafeAreaView>
//   )
// }
import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-paper'
import { SectionHeader } from '../components/action/SectionHeader.js'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { ActionsGrid } from '../components/action/ActionsGrid.js'
import ListItem from '../components/action/ListItem.js'
import FontAwesome from '@expo/vector-icons/FontAwesome'

// List Item Component (for vertical list items)


// Main Actions Menu Screen
const Action = () => {
  // Common Actions Data
  const commonActions = [
    {
      icon: <FontAwesome5 name="clipboard-list" size={24} color="#00BCD4" />,
      title: 'Mark Payments',
      description: 'Record full or partial payments received',
      iconColor: '#10B981',
      onPress: () => console.log('Mark Payments'),
    },
    {
      icon: <AntDesign name="user-add" size={24} color="#00BCD4" />,
      title: 'Add Member',
      description: 'Create a new member for tracking dues',
      iconColor: '#06B6D4',
      onPress: () => console.log('Add Member'),
    },
    {
      icon: <FontAwesome6 name="bell" size={24} color="#00BCD4" />,
      title: 'Remind Later',
      description: 'Schedule a follow-up reminder',
      iconColor: '#F59E0B',
      onPress: () => console.log('Remind Later'),
    },
    {
      icon: <Feather name="download" size={24} color="#00BCD4" />,
      title: 'Export CSV',
      description: 'Download current due contacts list',
      iconColor: '#8B5CF6',
      onPress: () => console.log('Export CSV'),
    },
  ]

  // Bulk Operations Data
  const bulkOperations = [
    {
      icon:<MaterialCommunityIcons name="email-outline" size={24} color="gray" />,
      title: 'Share Due Summary',
      description: 'Send a snapshot of totals to accountant',
      iconColor: '#3B82F6',
      onPress: () => console.log('Share Due Summary'),
    },
    {
      icon: <MaterialCommunityIcons name="sync" size={24} color="gray" />,
      title: 'Reconcile Records',
      description: 'Cross-check list to close entries',
      iconColor: '#06B6D4',
      onPress: () => console.log('Reconcile Records'),
    },
    {
      icon: <FontAwesome5 name="archive" size={24} color="gray" />,
      title: 'Archive Cleared Dues',
      description: 'Move fully paid entries to archive',
      iconColor: '#EF4444',
      onPress: () => console.log('Archive Cleared Dues'),
    },
  ]

  // Tools Data
  const tools = [
    {
      icon: <FontAwesome name="filter" size={24} color="gray" />,
      title: 'Filter Contacts',
      description: 'Show only overdue or high due amounts',
      iconColor: '#F59E0B',
      onPress: () => console.log('Filter Contacts'),
    },
    {
      icon: <FontAwesome name="calendar-o" size={24} color="gray" />,
      title: 'Set Reminder Day',
      description: 'Tip: Use Export to back up due contacts regularly',
      iconColor: '#10B981',
      onPress: () => console.log('Set Reminder Day'),
    },
  ]

  return (
    <View className="flex-1 !bg-background">
      {/* Header */}
      {/* <View className="bg-background p-4">
        <Text className=" text-lg text-mutedText font-bold">Actions Menu</Text>
      </View> */}

      <ScrollView className="flex-1">
        {/* Common Actions Section */}
        <SectionHeader title="Common Actions" />
        <ActionsGrid actions={commonActions} />

        {/* Bulk Operations Section */}
        <SectionHeader title="Bulk Operations" />
        {bulkOperations.map((item, index) => (
          <ListItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            iconColor={item.iconColor}
            onPress={item.onPress}
          />
        ))}

        {/* Tools Section */}
        <SectionHeader title="Tools" />
        {tools.map((item, index) => (
          <ListItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            iconColor={item.iconColor}
            onPress={item.onPress}
          />
        ))}

        {/* Bottom Spacing */}
        <View className="h-6" />
      </ScrollView>
    </View>
  )
}

export default Action
