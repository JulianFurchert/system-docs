import React from 'react'
import { Flex, Box, Heading, Badge, Text } from '@modulz/radix';
import navItems from '../nav.yml'
import { NavItem } from './nav-item';

export default ({ children, ...props }) => {
  return(
    <Box
      position={['static', 'fixed']}
      width={['100%', 200, 250]}
      height={['auto', '100vh']}
      overflow={['auto', 'scroll']}
      pb={[0, 8]}
      borderRight={[0, '1px solid']}
      borderBottom={['1px solid', 0]}
      borderColor={['gray300', 'gray300']}
      style={{ WebkitOverflowScrolling: 'touch', overflowX: 'hidden' }}
      {...props}
    >
      <Box py={2} px={4}>
        <Flex alignItems="center">
          <Text variant="title" ml={2}>
            title
          </Text>
          <Badge ml={2} variant="gray">
            V.0.1
          </Badge>
        </Flex>
      </Box>

      <Box>
        { navItems.map(navItem => (
          <Box>
            <Box>
              <Heading size={0} fontWeight={500} my={2} mx={5}>
                {navItem.categorie}
              </Heading>
              {navItem.pages && navItem.pages.map(item => (
                <NavItem
                  key={item.title}
                  to={item.url}
                  // active={pathname === item.fields.slug}
                >
                  {item.title}
                </NavItem>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
