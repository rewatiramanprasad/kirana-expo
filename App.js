import { View, Text } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Signup from './screens/Signup.jsx'
import Navigation from './components/Navigation.js'
import './global.css'
import theme from './components/theme.js'

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  )
}
