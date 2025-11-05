import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'
const FooterNote = ({ text }) => (
  <View className="px-4 py-4">
    <Text className="text-gray-500 text-xs text-center">{text}</Text>
  </View>
)

export default FooterNote