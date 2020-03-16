/** @jsx jsx */
import { jsx, Box, Flex, Text, Badge } from 'theme-ui'

export default ({ children, ...props }) => (
  <Box 
    sx={{
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
  </Box>
)