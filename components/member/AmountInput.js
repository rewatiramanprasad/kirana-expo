import { View, Text, TextInput } from 'react-native'
import { Icon } from 'react-native-paper'
const AmountInput = ({ label, icon, value, onChangeText }) => (
  <View className="flex-1">
    <Text className="!text-mutedText text-sm mb-3">{label}</Text>
    <View className="flex-row items-center bg-input !rounded-full px-4 py-3 border border-border">
      <Icon source={icon} size={20} color="#9CA3AF" />
      {/* <Text className="text-white text-base ml-2">₹</Text> */}
      <TextInput
        placeholder="0"
        placeholderTextColor="#FFFFFF"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        className="flex-1 ml-2 text-white text-base"
      />
    </View>
  </View>
)
export default AmountInput
