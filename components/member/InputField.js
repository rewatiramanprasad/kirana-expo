import { View, Text, TextInput } from 'react-native'
import { Icon } from 'react-native-paper'
const InputField = ({
  label,
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
}) => (
  <View className="mb-6 bg-cardBackground">
    <Text className="!text-mutedText text-sm mb-3">{label}</Text>
    <View className="flex-row items-center bg-input border border-border rounded-full px-4 py-3 ">
      <Icon source={icon} size={20} color="#FFFFFF" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        className="flex-1 ml-3 text-white text-base "
      />
    </View>
  </View>
)
export default InputField
