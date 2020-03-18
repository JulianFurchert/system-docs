/** @jsx jsx */
import { jsx, Flex, Text, Badge, useColorMode } from 'theme-ui'

export default ({ children, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  console.log(colorMode)
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        borderBottom: '2px solid',
        borderColor: 'gray200',
        px: 6,
      }} 
      {...props }
    >
      <Flex 
        sx={{ 
          alignItems: 'center',       
          height: 50 
        }} 
      >
        <Text sx={{ mr: 4 }}>
          title
        </Text>
        <Badge variant="outline">
          V.0.1
        </Badge>
      </Flex>
      <button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
    </Flex>
  )
}