import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'

const StatsCard = ({ label, value }) => (
  <View
    className={`flex-1 rounded-2xl border border-border p-4 m-2 bg-cardBackground`}
  >
    <Text className="!text-mutedText text-xs mb-2">{label}</Text>
    <Text className="text-white text-2xl font-bold">{value}</Text>
  </View>
)
export default StatsCard
