import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const CardButton = ({ title, icon }) => {
  return (
    <TouchableOpacity
      className="flex items-center border border-border
       !text-mutedText space-x-2 px-4 py-4
 bg-cardBackground rounded-xl"
    >
      <FontAwesome name={icon} size={24} color="#9AA8B2" />
      <Text className="text-mutedText">{title}</Text>
    </TouchableOpacity>
  )
}
export default CardButton
