import { View, Text, Image } from 'react-native'
import { Icon, useTheme } from 'react-native-paper'

export default function Profile({ member }) {
  const theme = useTheme()
  console.log('Profile member data:', member)
  const { name, avatar, lastTransaction, itemCount, dueAmount } = member
  const Mobile = '+1234567890'
  return (
    <View
      className="rounded-2xl border border-border  mb-4"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: theme.colors.cardBackground,
      }}
    >
      <View>
        <Image
          source={{ uri: avatar }}
          className="w-16 h-16 rounded-full bg-cardBackground overflow-hidden mr-4"
        />
      </View>
      <View>
        <Text className="text-white text-lg font-bold">{name}</Text>
        <Text className="text-mutedText text-sm">
          Last Txn : {lastTransaction} · {itemCount} item
        </Text>
        <Text className="text-mutedText text-sm font-medium">{Mobile}</Text>
      </View>
      <View style={{ gap: 10, alignItems: 'flex-end' }}>
        <View className=" flex flex-row !bg-warning !rounded-2xl px-2 py-1">
          <Icon source="clock-outline" size={20} color="black" />
          <Text className=" text-base font-semibold ml-1">Due</Text>
        </View>
        <Text className="text-white text-xl font-extrabold">₹ {dueAmount}</Text>
      </View>
    </View>
  )
}
