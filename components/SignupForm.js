import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const SignUpForm = ({ onCreateAccount, onViewTerms }) => {
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleCreateAccount = () => {
    if (onCreateAccount) {
      onCreateAccount({
        fullName,
        phoneNumber,
        email,
        password,
        confirmPassword,
        agreeToTerms,
      })
    }
  }

  return (
    <View className="bg-[#0f1c2e] rounded-2xl p-6 mx-4">
      {/* Full Name Input */}
      <View className="mb-5">
        <Text className="text-gray-400 text-sm mb-2 font-normal">
          Full name
        </Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
          placeholderTextColor="#6b7280"
          className="bg-[#1a2942] text-white rounded-xl px-4 py-3.5 text-base"
        />
      </View>

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

      {/* Email Input */}
      <View className="mb-5">
        <Text className="text-gray-400 text-sm mb-2 font-normal">
          Email (optional)
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          placeholderTextColor="#6b7280"
          keyboardType="email-address"
          autoCapitalize="none"
          className="bg-[#1a2942] text-white rounded-xl px-4 py-3.5 text-base"
        />
      </View>

      {/* Password Input */}
      <View className="mb-5">
        <Text className="text-gray-400 text-sm mb-2 font-normal">Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Create a password"
          placeholderTextColor="#6b7280"
          secureTextEntry
          className="bg-[#1a2942] text-white rounded-xl px-4 py-3.5 text-base"
        />
      </View>

      {/* Confirm Password Input */}
      <View className="mb-5">
        <Text className="text-gray-400 text-sm mb-2 font-normal">
          Confirm password
        </Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Re-enter password"
          placeholderTextColor="#6b7280"
          secureTextEntry
          className="bg-[#1a2942] text-white rounded-xl px-4 py-3.5 text-base"
        />
      </View>

      {/* Terms Agreement */}
      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity
          onPress={() => setAgreeToTerms(!agreeToTerms)}
          className="flex-row items-center flex-1"
          activeOpacity={0.7}
        >
          <View
            className={`w-5 h-5 rounded border-2 mr-2 ${
              agreeToTerms
                ? 'bg-cyan-400 border-cyan-400'
                : 'bg-transparent border-gray-500'
            }`}
          />
          <Text className="text-white text-sm font-normal">
            I agree to Terms
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onViewTerms} activeOpacity={0.7}>
          <Text className="text-white text-sm font-normal">View</Text>
        </TouchableOpacity>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={handleCreateAccount}
        className="bg-cyan-400 rounded-full py-4 active:opacity-80"
        activeOpacity={0.8}
      >
        <Text className="text-[#0f1c2e] text-center text-base font-semibold">
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpForm

// Usage Example:
// <SignUpForm
//   onCreateAccount={(data) => {
//     console.log('Account data:', data);
//   }}
//   onViewTerms={() => console.log('View terms')}
// />
