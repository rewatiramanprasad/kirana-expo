import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import DuesCard from './DuesCard'
import SignUpForm from './SignUpForm'

const SignUpScreen = ({ navigation }) => {
  const handleCreateAccount = (data) => {
    console.log('Creating account with:', data)

    // Validate passwords match
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    // Check if terms are agreed
    if (!data.agreeToTerms) {
      alert('Please agree to terms')
      return
    }

    // Add your sign-up logic here
    // navigation.navigate('Home');
  }

  const handleViewTerms = () => {
    console.log('View terms clicked')
    // navigation.navigate('Terms');
  }

  const handleOTPSignUp = () => {
    console.log('Sign up with OTP clicked')
    // navigation.navigate('OTPSignUp');
  }

  const handleSignIn = () => {
    console.log('Sign in clicked')
    // navigation.navigate('SignIn');
  }

  return (
    <View className="flex-1 bg-[#0a1520]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4">
        <View className="flex-row items-center">
          <View className="w-10 h-10 rounded-full bg-cyan-500 mr-3" />
          <Text className="text-white text-xl font-semibold">Grocery Dues</Text>
        </View>
        <View className="bg-cyan-500/20 px-4 py-2 rounded-full">
          <Text className="text-cyan-400 text-sm font-medium">Secure</Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Dues Card Component */}
        <DuesCard
          maxDues="—"
          minDues="—"
          totalDue="—"
          title="Create your account"
          subtitle="Sign up to start tracking dues"
        />

        {/* Sign Up Section Label */}
        <View className="px-4 mb-3">
          <Text className="text-gray-400 text-base font-normal">Sign up</Text>
        </View>

        {/* Sign Up Form Component */}
        <SignUpForm
          onCreateAccount={handleCreateAccount}
          onViewTerms={handleViewTerms}
        />

        {/* Divider */}
        <View className="flex-row items-center justify-center my-6 px-8">
          <View className="flex-1 h-px bg-gray-700" />
          <Text className="text-gray-500 text-sm mx-4">or</Text>
          <View className="flex-1 h-px bg-gray-700" />
        </View>

        {/* Sign up with OTP Button */}
        <View className="mx-4 mb-6">
          <TouchableOpacity
            onPress={handleOTPSignUp}
            className="bg-[#0f1c2e] rounded-2xl py-4 border border-gray-800 active:opacity-80"
            activeOpacity={0.8}
          >
            <Text className="text-white text-center text-base font-medium">
              Sign up with OTP
            </Text>
          </TouchableOpacity>
        </View>

        {/* Already have account */}
        <View className="flex-row justify-center items-center pb-8">
          <Text className="text-gray-400 text-sm">
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={handleSignIn} activeOpacity={0.7}>
            <Text className="text-white text-sm font-medium">Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUpScreen

// Usage:
// import SignUpScreen from './SignUpScreen';
// <SignUpScreen navigation={navigation} />
