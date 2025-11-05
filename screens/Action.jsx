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

// Action Card Component (for grid layout)
const ActionCard = ({
  icon,
  title,
  description,
  onPress,
  iconColor = '#06B6D4',
}) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-slate-800 rounded-lg p-4 flex-1"
    style={{ minWidth: '48%' }}
  >
    <View className="mb-3">
      <Icon source={icon} size={24} color={iconColor} />
    </View>
    <Text className="text-white text-base font-semibold mb-1">{title}</Text>
    <Text className="text-gray-400 text-xs leading-4">{description}</Text>
  </TouchableOpacity>
)

// Section Header Component
const SectionHeader = ({ title }) => (
  <View className="px-4 pt-6 pb-3">
    <Text className="text-gray-400 text-xs font-medium uppercase tracking-wider">
      {title}
    </Text>
  </View>
)

// List Item Component (for vertical list items)
const ListItem = ({
  icon,
  title,
  description,
  onPress,
  iconColor = '#FFFFFF',
}) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-slate-800 mx-4 mb-3 rounded-lg p-4 flex-row items-center justify-between"
  >
    <View className="flex-row items-center flex-1">
      <View className="w-10 h-10 bg-slate-700 rounded-lg items-center justify-center mr-3">
        <Icon source={icon} size={20} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="text-white text-base font-semibold mb-1">{title}</Text>
        <Text className="text-gray-400 text-xs">{description}</Text>
      </View>
    </View>
    <Icon source="chevron-right" size={20} color="#6B7280" />
  </TouchableOpacity>
)

// Actions Grid Component
const ActionsGrid = ({ actions }) => (
  <View className="px-4 flex-row flex-wrap gap-3">
    {actions.map((action, index) => (
      <ActionCard
        key={index}
        icon={action.icon}
        title={action.title}
        description={action.description}
        onPress={action.onPress}
        iconColor={action.iconColor}
      />
    ))}
  </View>
)

// Main Actions Menu Screen
const Action = () => {
  // Common Actions Data
  const commonActions = [
    {
      icon: 'cash',
      title: 'Mark Payments',
      description: 'Record full or partial payments received',
      iconColor: '#10B981',
      onPress: () => console.log('Mark Payments'),
    },
    {
      icon: 'account-plus',
      title: 'Add Member',
      description: 'Create a new member for tracking dues',
      iconColor: '#06B6D4',
      onPress: () => console.log('Add Member'),
    },
    {
      icon: 'bell',
      title: 'Remind Later',
      description: 'Schedule a follow-up reminder',
      iconColor: '#F59E0B',
      onPress: () => console.log('Remind Later'),
    },
    {
      icon: 'download',
      title: 'Export CSV',
      description: 'Download current due contacts list',
      iconColor: '#8B5CF6',
      onPress: () => console.log('Export CSV'),
    },
  ]

  // Bulk Operations Data
  const bulkOperations = [
    {
      icon: 'email-send',
      title: 'Share Due Summary',
      description: 'Send a snapshot of totals to accountant',
      iconColor: '#3B82F6',
      onPress: () => console.log('Share Due Summary'),
    },
    {
      icon: 'sync',
      title: 'Reconcile Records',
      description: 'Cross-check list to close entries',
      iconColor: '#06B6D4',
      onPress: () => console.log('Reconcile Records'),
    },
    {
      icon: 'archive',
      title: 'Archive Cleared Dues',
      description: 'Move fully paid entries to archive',
      iconColor: '#EF4444',
      onPress: () => console.log('Archive Cleared Dues'),
    },
  ]

  // Tools Data
  const tools = [
    {
      icon: 'filter',
      title: 'Filter Contacts',
      description: 'Show only overdue or high due amounts',
      iconColor: '#F59E0B',
      onPress: () => console.log('Filter Contacts'),
    },
    {
      icon: 'calendar-clock',
      title: 'Set Reminder Day',
      description: 'Tip: Use Export to back up due contacts regularly',
      iconColor: '#10B981',
      onPress: () => console.log('Set Reminder Day'),
    },
  ]

  return (
    <View className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="bg-slate-800 pt-12 pb-4 px-4">
        <Text className="text-white text-xl font-bold">Actions Menu</Text>
      </View>

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