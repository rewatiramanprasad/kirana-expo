// import React from 'react'
// import { View } from 'react-native'
// import { Appbar } from 'react-native-paper'
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
// import { useTheme } from 'react-native-paper'

// function Header({}) {
//     const theme = useTheme();
//   return (
//     // <Appbar.Header  style={{ backgroundColor:theme.colors.background}}>
//     //       <Appbar.Action icon="wallet-bifold-outline" className="text-lg font-bold text-teal-600" style={{ backgroundColor:theme.colors.cardBackground}} />
//     //   <Appbar.Content title="Dues Tracker" className="text-lg font-bold text-white" />
//     <View>
//       <View>
//         <MaterialCommunityIcons
//           name="wallet-bifold-outline"
//           size={24}
//           color="black"
//         />
//         <Text className="text-lg font-bold">Dues Tracker</Text>
//       </View>
//     </View>
//   )
// }

// export default Header
import React, { use } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Appbar, IconButton, Text, useTheme } from 'react-native-paper'
import { Wallet, Info, Download } from 'lucide-react-native'
import theme from './theme'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = (props) => {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
      <View className="flex-column">
        {/* Main App Bar */}
        <View className="flex-row items-center justify-between px-4 py-2">
          {/* Left side - Icon and Title */}
          <View className="flex-row items-center">
            <View className={' p-2 bg-cardBackground rounded-full'}>
              <Wallet color={theme.colors.primary} size={28} strokeWidth={2} />
            </View>
            <Text
              className=" text-xl font-semibold ml-3"
              style={{ color: theme.colors.text }}
            >
              Dues Tracker
            </Text>
          </View>

          {/* Right side - Export Button */}
          <TouchableOpacity className=" p-2 rounded-full flex-row items-center bg-cardBackground border-0">
            <Download
              color={theme.colors.mutedText}
              size={20}
              strokeWidth={2}
            />
            <Text className=" !text-mutedText text-sm ml-2">Export</Text>
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View className="px-4 pb-2 border-b border-border">
          <View className="flex-row justify-left items-center w-2/3 rounded-full   p-2 bg-cardBackground">
            <Info color={theme.colors.mutedText} size={20} strokeWidth={2} />
            <Text className="!text-primary text-sm ml-2">
              Overview of outstanding dues
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header
