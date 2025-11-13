import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-paper'
const StatusSelector = ({ selectedStatus, onStatusChange }) => (
  <View className="flex-1">
    <Text className="text-mutedText text-sm mb-3">Status</Text>
    <View className="flex-row items-center bg-input rounded-full px-4 py-4 border border-slate-700">
      <Icon source="clock-outline" size={20} color="#FFFFFF" />
      <TouchableOpacity className="flex-1 ml-3" onPress={onStatusChange}>
        <Text className="text-white text-base">{selectedStatus}</Text>
      </TouchableOpacity>
      <Icon source="chevron-down" size={20} color="#9CA3AF" />
    </View>
  </View>
)
export default StatusSelector
