// import React from 'react'
// import { ScrollView, Text } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'

// export default function Member() {
//   return (
//     <SafeAreaView className="flex-1 bg-background">
//           <ScrollView contentContainerClassName="p-5">
//               <Text>
//                 Member Screen
//               </Text>
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'
import { Button, Icon } from 'react-native-paper'

// Photo Upload Component
const PhotoUpload = ({ imageUri, onUpload }) => (
  <View className="mb-6">
    <Text className="text-gray-400 text-sm mb-3">Photo</Text>
    <View className="flex-row items-center">
      <View className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden mr-4">
        {imageUri ? (
          <Image source={{ uri: imageUri }} className="w-full h-full" />
        ) : (
          <View className="w-full h-full bg-slate-700" />
        )}
      </View>
      <TouchableOpacity onPress={onUpload} className="flex-row items-center">
        <Icon source="camera" size={20} color="#06B6D4" />
        <Text className="text-cyan-400 text-sm ml-2">Upload</Text>
      </TouchableOpacity>
    </View>
  </View>
)

// Input Field Component
const InputField = ({
  label,
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
}) => (
  <View className="mb-6">
    <Text className="text-gray-400 text-sm mb-3">{label}</Text>
    <View className="flex-row items-center bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
      <Icon source={icon} size={20} color="#9CA3AF" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#6B7280"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        className="flex-1 ml-3 text-white text-base"
      />
    </View>
  </View>
)

// Phone Input Component (with country code)
const PhoneInputField = ({
  label,
  countryCode = '+91',
  value,
  onChangeText,
  altLabel,
  altCountryCode = '+91',
  altValue,
  onAltChangeText,
}) => (
  <View className="mb-6">
    <Text className="text-gray-400 text-sm mb-3">{label}</Text>
    <View className="flex-row gap-3">
      {/* Primary Phone */}
      <View className="flex-1 flex-row items-center bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
        <Icon source="phone" size={20} color="#9CA3AF" />
        <Text className="text-gray-400 text-base ml-2 mr-1">{countryCode}</Text>
        <TextInput
          placeholder="8XXXXXXXXX"
          placeholderTextColor="#6B7280"
          value={value}
          onChangeText={onChangeText}
          keyboardType="phone-pad"
          className="flex-1 text-white text-base"
        />
      </View>

      {/* Alternate Phone (Optional) */}
      {altLabel && (
        <View className="flex-1">
          <Text className="text-gray-400 text-xs mb-2">{altLabel}</Text>
          <View className="flex-row items-center bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
            <Icon source="phone" size={20} color="#9CA3AF" />
            <Text className="text-gray-400 text-base ml-2 mr-1">
              {altCountryCode}
            </Text>
            <TextInput
              placeholder="8XXXXXXXXX"
              placeholderTextColor="#6B7280"
              value={altValue}
              onChangeText={onAltChangeText}
              keyboardType="phone-pad"
              className="flex-1 text-white text-base"
            />
          </View>
        </View>
      )}
    </View>
  </View>
)

// Address Input Component
const AddressInput = ({ value, onChangeText }) => (
  <View className="mb-6">
    <Text className="text-gray-400 text-sm mb-3">Address</Text>
    <View className="flex-row items-center bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
      <Icon source="map-marker" size={20} color="#9CA3AF" />
      <TextInput
        placeholder="House/Street, Area, City"
        placeholderTextColor="#6B7280"
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-3 text-white text-base"
      />
    </View>
    <Text className="text-gray-500 text-xs mt-2">
      Use to show address and seller's notes
    </Text>
  </View>
)

// Amount Input Component
const AmountInput = ({ label, icon, value, onChangeText }) => (
  <View className="flex-1">
    <Text className="text-gray-400 text-sm mb-3">{label}</Text>
    <View className="flex-row items-center bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
      <Icon source={icon} size={20} color="#9CA3AF" />
      <Text className="text-white text-base ml-2">₹</Text>
      <TextInput
        placeholder="0"
        placeholderTextColor="#6B7280"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        className="flex-1 ml-2 text-white text-base"
      />
    </View>
  </View>
)

// Status Selector Component
const StatusSelector = ({ selectedStatus, onStatusChange }) => (
  <View className="flex-1">
    <Text className="text-gray-400 text-sm mb-3">Status</Text>
    <View className="flex-row items-center bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
      <Icon source="clock-outline" size={20} color="#9CA3AF" />
      <TouchableOpacity className="flex-1 ml-3" onPress={onStatusChange}>
        <Text className="text-white text-base">{selectedStatus}</Text>
      </TouchableOpacity>
      <Icon source="chevron-down" size={20} color="#9CA3AF" />
    </View>
  </View>
)

// Notes Input Component
const NotesInput = ({ value, onChangeText }) => (
  <View className="mb-6">
    <Text className="text-gray-400 text-sm mb-3">Notes</Text>
    <TouchableOpacity
      className="flex-row items-center bg-slate-800 rounded-lg px-4 py-4 border border-slate-700"
      onPress={() => {}}
    >
      <Icon source="note-outline" size={20} color="#9CA3AF" />
      <Text className="text-gray-400 text-base ml-3">
        Add any special terms or reminders
      </Text>
    </TouchableOpacity>
  </View>
)

// Info Footer Component
const InfoFooter = () => (
  <View className="flex-row justify-between mb-6">
    <View>
      <Text className="text-gray-500 text-xs">Will be added to</Text>
      <Text className="text-white text-base font-semibold">Members</Text>
    </View>
    <View>
      <Text className="text-gray-500 text-xs">Initial Balance</Text>
      <Text className="text-white text-base font-semibold">₹ 0</Text>
    </View>
  </View>
)

// Main New Member Screen
const Member = () => {
  const [formData, setFormData] = useState({
    photo: null,
    fullName: '',
    phone: '',
    altPhone: '',
    address: '',
    startingDue: '',
    status: 'Due',
    notes: '',
  })

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log('Saving member:', formData)
  }

  const handleCancel = () => {
    console.log('Cancel')
  }

  return (
    <View className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="bg-slate-800 pt-12 pb-4 px-4">
        <Text className="text-white text-xl font-bold">New Member</Text>
      </View>

      {/* Form Content */}
      <ScrollView className="flex-1 px-4 pt-6">
        <PhotoUpload
          imageUri={formData.photo}
          onUpload={() => console.log('Upload photo')}
        />

        <InputField
          label="Full Name"
          icon="account"
          placeholder="e.g., Rohan Singh"
          value={formData.fullName}
          onChangeText={(value) => updateField('fullName', value)}
        />

        <PhoneInputField
          label="Phone"
          value={formData.phone}
          onChangeText={(value) => updateField('phone', value)}
          altLabel="Alt. Phone (optional)"
          altValue={formData.altPhone}
          onAltChangeText={(value) => updateField('altPhone', value)}
        />

        <AddressInput
          value={formData.address}
          onChangeText={(value) => updateField('address', value)}
        />

        <View className="flex-row gap-3 mb-6">
          <AmountInput
            label="Starting Due"
            icon="currency-inr"
            value={formData.startingDue}
            onChangeText={(value) => updateField('startingDue', value)}
          />

          <StatusSelector
            selectedStatus={formData.status}
            onStatusChange={() => console.log('Change status')}
          />
        </View>

        <NotesInput
          value={formData.notes}
          onChangeText={(value) => updateField('notes', value)}
        />

        <InfoFooter />
      </ScrollView>

      {/* Action Buttons */}
      <View className="bg-slate-800 px-4 py-4 flex-row gap-3">
        <Button
          mode="outlined"
          icon="close"
          textColor="#FFFFFF"
          onPress={handleCancel}
          className="flex-1 border-slate-600"
        >
          Cancel
        </Button>
        <Button
          mode="contained"
          icon="content-save"
          buttonColor="#06B6D4"
          textColor="#FFFFFF"
          onPress={handleSave}
          className="flex-1"
        >
          Save Member
        </Button>
      </View>
    </View>
  )
}

export default Member