import { createStackNavigator } from '@react-navigation/stack'
import MemberDetails from '../../screens/MemberDetails'
import MemberList from '../../screens/List'

const Stack = createStackNavigator()

export default function MemberStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MemberList" component={MemberList} />
      <Stack.Screen name="MemberDetails" component={MemberDetails} />
    </Stack.Navigator>
  )
}
