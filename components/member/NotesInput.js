import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-paper'
const NotesInput = ({ value, onChangeText }) => (
  <View className="mb-6">
    <Text className="text-mutedText text-sm mb-3">Notes</Text>
    <TouchableOpacity
      className="flex-row items-center bg-input rounded-full px-4 py-4 border border-slate-700"
      onPress={() => {}}
    >
      <Icon source="note-outline" size={20} color="#FFFFFF" />
      <Text className="text-text text-base ml-3">
        Add any special terms or reminders
      </Text>
    </TouchableOpacity>
  </View>
)
export default NotesInput
