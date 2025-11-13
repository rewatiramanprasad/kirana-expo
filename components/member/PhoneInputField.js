import { View, Text, TextInput } from 'react-native'
import { Icon } from 'react-native-paper'
const PhoneInputField = ({
  label,
  countryCode = '+91',
  value,
  onChangeText,
  altLabel,
  altCountryCode = '+91',
  altValue,
  onAltChangeText,
}) => (
  <View className="mb-6">
    <Text className="text-gray-400 text-sm mb-3">{label}</Text>
    <View className="flex-row gap-3">
      {/* Primary Phone */}
      <View className="flex-1 flex-row items-center bg-input rounded-full  px-4 py-3 border border-border">
        <Icon source="phone" size={20} color="#FFFFFF" />
        <Text className="text-gray-400 text-base ml-2 mr-1">{countryCode}</Text>
        <TextInput
          placeholder="8XXXXXXXXX"
          placeholderTextColor="#FFFFFF"
          value={value}
          onChangeText={onChangeText}
          keyboardType="phone-pad"
          className="flex-1 text-white text-base"
        />
      </View>

      {/* Alternate Phone (Optional)
      {altLabel && (
        <View className="flex-1">
          <Text className="text-gray-400 text-xs mb-2">{altLabel}</Text>
          <View className="flex-row items-center bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
            <Icon source="phone" size={20} color="#9CA3AF" />
            <Text className="text-gray-400 text-base ml-2 mr-1">
              {altCountryCode}
            </Text>
            <TextInput
              placeholder="8XXXXXXXXX"
              placeholderTextColor="#6B7280"
              value={altValue}
              onChangeText={onAltChangeText}
              keyboardType="phone-pad"
              className="flex-1 text-white text-base"
            />
          </View>
        </View>
      )} */}
    </View>
  </View>
)

export default PhoneInputField