import { View, Text, TextInput } from 'react-native'
import { Icon } from 'react-native-paper'
const AddressInput = ({ value, onChangeText }) => (
  <View className="mb-6">
    <Text className="text-mutedText text-sm mb-3">Address</Text>
    <View className="flex-row items-center bg-input rounded-full px-4 py-3 border border-border">
      <Icon source="map-marker" size={20} color="#FFFFFF" />
      <TextInput
        placeholder="House/Street, Area, City"
        placeholderTextColor="#FFFFFF"
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-3 text-white text-base"
      />
    </View>
    {/* <Text className="text-gray-500 text-xs mt-2">
      Use to show address and seller's notes
    </Text> */}
  </View>
)
export default AddressInput
