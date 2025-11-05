import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'
import { Icon } from 'react-native-paper'
export default function ContactCard({
  name,
  phone,
  email,
  avatarUri,
  onPress,
  onCopyPhone,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-cardBackground border border-border mx-4 mb-3 rounded-2xl p-4"
    >
      <View className="flex-row items-center justify-between">
        {/* Left Section - Avatar and Info */}
        <View className="flex-row items-center flex-1">
          <Image
            source={{ uri: avatarUri }}
            className="w-12 h-12 rounded-full mr-3"
          />
          <View className="flex-1">
            <Text className="text-white text-base font-semibold mb-1">
              {name}
            </Text>
            <Text className="text-gray-400 text-sm">{phone}</Text>
            {email && <Text className="text-gray-400 text-sm">{email}</Text>}
          </View>
        </View>

        {/* Right Section - Copy Icon */}
        <TouchableOpacity onPress={onCopyPhone} className="p-2">
          <Icon source="content-copy" size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
