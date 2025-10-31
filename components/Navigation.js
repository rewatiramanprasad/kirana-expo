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
  const theme=useTheme()
  return (
    <Provider>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          screenOptions={{
            animation: 'shift',
          }}
          activeColor={theme.colors.primary}
          tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
              navigationState={state}
              safeAreaInsets={insets}
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
            component={HomeScreen}
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
            component={SignUp}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="list" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="NewMember"
            component={Login}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="person-add" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="ContactList"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="contacts"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Action"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

// import React from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { Text, useTheme, Surface } from 'react-native-paper';
// import { Feather } from '@expo/vector-icons';

// const TabButton = ({ icon, label, isActive, onPress }) => {
//   const theme = useTheme();

//   return (
//     <TouchableOpacity onPress={onPress} style={styles.tabButton}>
//       <Feather
//         name={icon}
//         size={24}
//         color={isActive ? theme.colors.primary : theme.colors.onSurfaceDisabled}
//       />
//       <Text
//         style={[
//           styles.tabLabel,
//           {
//             color: isActive ? theme.colors.primary : theme.colors.onSurfaceDisabled,
//           },
//         ]}
//       >
//         {label}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// export default function BottomTabNavigation({ activeTab = 'Dashboard', onTabChange }) {
//   const theme = useTheme();

//   const tabs = [
//     { id: 'Dashboard', icon: 'pie-chart', label: 'Dashboard' },
//     { id: 'List', icon: 'users', label: 'List' },
//     { id: 'NewMember', icon: 'user-plus', label: 'NewMember' },
//     { id: 'ContactList', icon: 'tablet', label: 'ContactList' },
//     { id: 'Action', icon: 'settings', label: 'Action' },
//   ];

//   return (
//     <Surface style={[styles.container, { backgroundColor: theme.colors.background }]}>
//       <View style={styles.row}>
//         {tabs.map((tab) => (
//           <TabButton
//             key={tab.id}
//             icon={tab.icon}
//             label={tab.label}
//             isActive={activeTab === tab.id}
//             onPress={() => onTabChange?.(tab.id)}
//           />
//         ))}
//       </View>
//     </Surface>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     elevation: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//   },
//   tabButton: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   tabLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     marginTop: 4,
//   },
// });
