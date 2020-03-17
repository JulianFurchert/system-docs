import React from 'react'
import Box from '@theme-ui/components'

export const Block = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __themeKey="block"
    __css={{
      display: 'flex',
      alignItems: 'center',
      px: 3,
      py: 2,
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      borderRadius: 4,
    }}
  />
))