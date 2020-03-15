/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import { Text } from '@theme-ui/components';

function NavItem({ children, isExternal, active, ...props }) {
  return (
    <li 
      sx={{
        m:0,
        p: 0,
        px: 3, 
        listStyleType: 0,
        minHeight: 35,
        fontSize: 16,
        color: '#2c2c2c',
        borderRadius: 1,
        backgroundColor: active ? 'rgba(44,44,44,.06)' : 'transparent'
      }} 
    >
      <Text 
        {...props}
        as={Link}
        size={2} 
        textColor={active ? 'white' : undefined} 
        mr={isExternal ? 1 : 0}
      >
        {children}
      </Text>
      {isExternal && <ExternalLinkIcon />}
    </li>
  );
}

function NavList({ children, ...props }) {
  return (
    <ul 
      sx={{
        
      }}
      {...props }
    >
      {children}
    </ul>
  );
}

export { NavList, NavItem };
