/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ children, ...props }) => (
  <div
    css={{
      pt: 8,
      pb: 9,
      marginLeft: [0, 200, 250],
      maxWidth: '100%',
      display:'block'
    }}
    {...props}
  >
    <div 
      css={{
        maxWidth: 720,
        px: 6,
        margin: "0px auto"
      }}
    >
      {children}
    </div>
  </div>
)