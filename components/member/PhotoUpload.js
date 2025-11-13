import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-paper'

// Photo Upload Component
const PhotoUpload = ({
  imageUri = 'https://i.pravatar.cc/150?img=4',
  onUpload,
}) => (
  <View className="mb-6">
    <Text className="text-mutedText text-sm mt-4 mb-3">Photo</Text>
    <View className="flex-row items-center justify-between pr-8">
      <View className="w-16 h-16 rounded-full bg-cardBackground overflow-hidden mr-4">
        {imageUri ? (
          <Image source={{ uri: imageUri }} className="w-full h-full" />
        ) : (
          <View className="w-full h-full bg-slate-700" />
        )}
      </View>
      <TouchableOpacity onPress={onUpload} className="flex-row items-center px-8 py-4 justify-center bg-input w-2/3 rounded-full">
        <Icon source="camera" size={20} color="#00BCD4" />
        <Text className="text-primary text-sm ml-2">Upload</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default PhotoUpload
