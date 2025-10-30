import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const LoginForm = ({ onSignIn, onForgotPassword }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSignIn = () => {
    if (onSignIn) {
      onSignIn({ phoneNumber, password, rememberMe })
    }
  }

  return (
    <View className="bg-[#0f1c2e] rounded-2xl p-6 mx-4">
      {/* Phone Number Input */}
      <View className="mb-5">
        <Text className="text-gray-400 text-sm mb-2 font-normal">
          Phone number
        </Text>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="+91 9XXXXXXXXX"
          placeholderTextColor="#6b7280"
          keyboardType="phone-pad"
          className="bg-[#1a2942] text-white rounded-xl px-4 py-3.5 text-base"
        />
      </View>

      {/* Password Input */}
      <View className="mb-4">
        <Text className="text-gray-400 text-sm mb-2 font-normal">Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#6b7280"
          secureTextEntry
          className="bg-[#1a2942] text-white rounded-xl px-4 py-3.5 text-base"
        />
      </View>

      {/* Remember Me and Forgot Password */}
      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity
          onPress={() => setRememberMe(!rememberMe)}
          className="flex-row items-center"
          activeOpacity={0.7}
        >
          <View
            className={`w-5 h-5 rounded border-2 mr-2 ${
              rememberMe
                ? 'bg-cyan-400 border-cyan-400'
                : 'bg-transparent border-gray-500'
            }`}
          />
          <Text className="text-white text-sm font-normal">Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onForgotPassword} activeOpacity={0.7}>
          <Text className="text-white text-sm font-normal">Forgot?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={handleSignIn}
        className="bg-cyan-400 rounded-full py-4 active:opacity-80"
        activeOpacity={0.8}
      >
        <Text className="text-[#0f1c2e] text-center text-base font-semibold">
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginForm

// Usage Example:
// <LoginForm
//   onSignIn={({ phoneNumber, password, rememberMe }) => {
//     console.log('Sign in:', phoneNumber, password, rememberMe);
//   }}
//   onForgotPassword={() => console.log('Forgot password')}
// />
