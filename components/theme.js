import { MD3LightTheme as DefaultTheme } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00BCD4', // bright cyan for buttons and highlights
    secondary: '#0E2A35', // deep bluish-gray for cards and secondary elements
    tertiary: '#050E14', // dark navy for main background
    background: '#0f1724', // matches tertiary for consistency
    text: '#FFFFFF', // main text color
    mutedText: '#9AA8B2', // lighter gray-blue for labels and placeholders
    border: '#1f2a44',
    cardBackground: '#0b2233', // subtle border color if needed
  },
}

export default theme
