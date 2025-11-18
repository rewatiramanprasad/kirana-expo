import { Text, View } from 'react-native'
import { NavigationContainer, CommonActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider, BottomNavigation, useTheme } from 'react-native-paper'
import SignUp from '../screens/Signup.jsx'
import Login from '../screens/Login.jsx'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import { use } from 'react'
import Dashboard from '../screens/Dashboard.jsx'
import Header from './Header.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import MemberList from '../screens/List.jsx'
import Member from '../screens/Member.jsx'
import Contact from '../screens/Contact.jsx'
import Action from '../screens/Action.jsx'
import MemberStack from './list/MemberStack.js'
import MemberDetails from '../screens/MemberDetails.jsx'
import NewDueEntry from '../screens/NewDueEntry.jsx'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export default function Navigation() {
  const theme = useTheme()
  return (
    // <SafeAreaView>
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          animation: 'shift',
          header: (props) => <Header {...props} />,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            activeColor={theme.colors.primary}
            activeIndicatorStyle={{ backgroundColor: theme.colors.background }}
            inactiveColor={theme.colors.mutedText}
            style={{
              backgroundColor: theme.colors.background,
              borderTopColor: theme.colors.border,
              borderTopWidth: 1,
            }}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (event.defaultPrevented) {
                preventDefault()
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                })
              }
            }}
            renderIcon={({ route, focused, color }) =>
              descriptors[route.key].options.tabBarIcon?.({
                focused,
                color,
                size: 24,
              }) || null
            }
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key]
              const label =
                typeof options.tabBarLabel === 'string'
                  ? options.tabBarLabel
                  : typeof options.title === 'string'
                    ? options.title
                    : route.name

              return label
            }}
          />
        )}
      >
        <Tab.Screen
          name="Dashboard"
          component={NewDueEntry}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={MemberStack}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="list" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Member"
          component={Member}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-add" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="contacts" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Action"
          component={Action}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  )
}
