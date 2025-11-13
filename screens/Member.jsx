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
import PhotoUpload from '../components/member/PhotoUpload.js'
import InfoFooter from '../components/member/InfoFooter.js'
import InputField from '../components/member/InputField.js'
import PhoneInputField from '../components/member/PhoneInputField.js'
import AddressInput from '../components/member/AddressInput.js'
import AmountInput from '../components/member/AmountInput.js'
import StatusSelector from '../components/member/StatusSelector.js'
import NotesInput from '../components/member/NotesInput.js'


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
    if (field && value !== undefined && value !== null) {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleSave = () => {
    if (formData.photo && formData.fullName && formData.phone && formData.address && formData.startingDue && formData.status && formData.notes) {
      console.log('Saving member:', formData)
    } else {
      console.log('Please fill in all the required fields')
    }
  }

  const handleCancel = () => {
    console.log('Cancel')
  }

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View className="bg-background p-4">
        <Text className="text-mutedText text-xl font-bold">New Member</Text>
      </View>

      {/* Form Content */}
      <ScrollView className="flex-1 px-4 m-4 bg-cardBackground pt-2 border rounded-2xl border-border">
        <PhotoUpload
          // imageUri={formData.photo}
          onUpload={(uri) => updateField('photo', uri)}
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
            onStatusChange={(status) => updateField('status', status)}
          />
        </View>

        <NotesInput
          value={formData.notes}
          onChangeText={(value) => updateField('notes', value)}
        />

        <InfoFooter />
        <View className="bg-cardBackground px-4 py-4 flex-row gap-3">
          <Button
            mode="outlined"
            icon="close"
            textColor="#FFFFFF"
            onPress={handleCancel}
            className="flex-1 border-slate-700"
          >
            Cancel
          </Button>
          <Button
            mode="contained"
            icon="content-save"
            buttonColor="#00BCD4"
            textColor="#FFFFFF"
            onPress={handleSave}
            className="flex-1"
          >
            Save Member
          </Button>
        </View>
      </ScrollView>

      {/* Action Buttons */}
    </View>
  )
}

export default Member