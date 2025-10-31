import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

import LoginForm from '../components/LoginForm'
import AuthButtons from '../components/AuthButtons'
import WelcomeDuesCard from '../components/WelcomeDuesCard'

const SignInScreen = ({ navigation }) => {
  const handleSignIn = ({ phoneNumber, password, rememberMe }) => {
    console.log('Sign in with:', phoneNumber, password, rememberMe)
    // Add your sign-in logic here
    // navigation.navigate('Home');
  }

  const handleForgotPassword = () => {
    console.log('Forgot password clicked')
    // navigation.navigate('ForgotPassword');
  }

  const handleOTPPress = () => {
    console.log('Sign in with OTP clicked')
    // navigation.navigate('OTPScreen');
  }

  const handleEmailPress = () => {
    console.log('Continue with Email clicked')
    // navigation.navigate('EmailScreen');
  }

  return (
    <View className="flex-1 bg-[#0a1520]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4">
        <Text className="text-white text-xl font-semibold">Grocery Dues</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="text-cyan-400 text-base font-medium">Help</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Dues Card */}
        <WelcomeDuesCard maxDues="—" minDues="—" totalDue="—" />

        {/* Sign In Section */}
        <View className="px-4 mt-2">
          <Text className="text-gray-400 text-base font-normal mb-3">
            Sign In
          </Text>
        </View>

        {/* Login Form */}
        <LoginForm
          onSignIn={handleSignIn}
          onForgotPassword={handleForgotPassword}
        />

        {/* Divider */}
        <View className="flex-row items-center justify-center my-6 px-8">
          <View className="flex-1 h-px bg-gray-700" />
          <Text className="text-gray-500 text-sm mx-4">or</Text>
          <View className="flex-1 h-px bg-gray-700" />
        </View>

        {/* Auth Buttons */}
        <AuthButtons
          onOTPPress={handleOTPPress}
          onEmailPress={handleEmailPress}
        />

        {/* Terms and Privacy */}
        <View className="px-8 py-6">
          <Text className="text-gray-500 text-xs text-center leading-5">
            By continuing, you agree to the Terms and Privacy Policy.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignInScreen

// Usage:
// import SignInScreen from './SignInScreen';
// <SignInScreen navigation={navigation} />
