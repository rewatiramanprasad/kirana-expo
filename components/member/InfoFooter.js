import { View, Text } from 'react-native'
const InfoFooter = () => (
  <View className="flex-row justify-between  mb-6">
    <View className=" p-4 rounded-2xl border border-slate-700">
      <Text className="text-mutedText text-xs">Will be added to</Text>
      <Text className="text-white text-base font-semibold">Members</Text>
    </View>
    <View className="p-4 rounded-2xl border border-slate-700">
      <Text className="text-mutedText text-xs">Initial Balance</Text>
      <Text className="text-white text-base font-semibold">₹ 0</Text>
    </View>
  </View>
)

export default InfoFooter
