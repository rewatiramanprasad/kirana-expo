import { View, Text } from 'react-native'
const ScreenHeader = ({ title }) => (
  <View className="bg-background pt-12 pb-4 px-4">
    <Text className="!text-mutedText text-xl font-bold">{title}</Text>
  </View>
)

export default ScreenHeader
