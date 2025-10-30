import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const AuthButtons = ({ onOTPPress, onEmailPress }) => {
  return (
    <View className="bg-[#0a1929] rounded-2xl p-6 mx-4">
      {/* Sign in with OTP Button */}
      <TouchableOpacity
        onPress={onOTPPress}
        className="bg-[#1a2d42] rounded-lg py-4 px-6 mb-4 active:opacity-80"
        activeOpacity={0.8}
      >
        <Text className="text-white text-center text-base font-medium">
          Sign in with OTP
        </Text>
      </TouchableOpacity>

      {/* Continue with Email Button */}
      <TouchableOpacity
        onPress={onEmailPress}
        className="bg-[#1a2d42] rounded-lg py-4 px-6 active:opacity-80"
        activeOpacity={0.8}
      >
        <Text className="text-white text-center text-base font-medium">
          Continue with Email
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthButtons

// Usage Example:
// <AuthButtons
//   onOTPPress={() => console.log('OTP clicked')}
//   onEmailPress={() => console.log('Email clicked')}
// />
