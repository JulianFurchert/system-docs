import React from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components'

const ThemeProvider: React.FC = ({children}) => {
  return(
    <BaseThemeProvider theme={{colors: {primary: '#FB7079'}}}>
      {children}
    </BaseThemeProvider>
  )
}

export default ThemeProvider