import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Flex,
  Box,
  List,
  Heading,
  Badge,
  Divider,
  Container,
  GhostButton,
  Text,
  Link,
} from '@modulz/radix';
import { HamburgerIcon, CrossIcon } from '@modulz/radix-icons';
import NavItem from './components/NavItem';
import './index.css'

function App({ element, props }) {
  const pathname = props.location.pathname;
  const [navOpen, setNavOpen] = useState(false);
  const data = useStaticQuery(graphql`
    fragment mdxContent on MdxConnection {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    query {
      allMdx: allMdx(sort: {order: ASC, fields: [frontmatter___order, frontmatter___title]}, filter: {frontmatter: {hidden: {ne: true}}}) {
        group(field: frontmatter___menu) {
          fieldValue
          nodes {
            frontmatter {
              menu
              title
            }
            fields {
              slug
            }
          }
        }
      }
      config: docsConfig{
        title
        version
        links{
          name
          url
        }
        menu
      }
    }
  `)

  const indexOf = value => {
    let index = data.config.menu.indexOf(value)
    return index !== -1 ? index : 10000
  }

  const menu = data.allMdx.group.sort(({fieldValue: a}, {fieldValue: b}) =>
    indexOf(a) - indexOf(b)
  )

  console.log(data.config.menu.indexOf('Pattern'))
  console.log(data.config.menu.indexOf('Overview'))
  console.log(data.config.menu.indexOf('Components'))

  return (
    <>
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
      >
        <Box py={2} px={4}>
          <Flex alignItems="center">
            <Box>
            <svg 
              width="25"
              height="25"
              viewBox="0 0 500 500"
              fill="#00506A"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M463.4,250.8c0,70.5-12,127.5-25.5,127.5c-13.5,0-25.5-57-25.5-127.5s12-127.5,25.5-127.5 C451.4,123.3,463.4,180.3,463.4,250.8z"/>
              <path d="M88.4,250.8c0,70.5-12,127.5-25.5,127.5s-25.5-57-25.5-127.5s12-127.5,25.5-127.5 C77.9,121.8,88.4,180.3,88.4,250.8z"/>
              <path d="M182.9,250.8c0,105-15,192-31.5,192c-18,0-31.5-85.5-31.5-192c0-105,15-192,31.5-192S182.9,144.3,182.9,250.8z"/>
              <path d="M382.4,250.8c0,105-15,192-31.5,192c-18,0-31.5-85.5-31.5-192c0-105,15-192,31.5-192 C367.4,58.8,382.4,144.3,382.4,250.8z"/>
              <path d="M289.4,250.8c0,129-16.5,234-39,234c-21,0-37.5-105-37.5-234s16.5-234,37.5-234 C271.4,16.8,289.4,120.3,289.4,250.8z"/>
            </svg>
            </Box>
            <Text variant="title" ml={2}>
              {data.config.title}
            </Text>
            <Badge ml={2} variant="gray">
              {data.config.version}
            </Badge>
            <Box ml="auto" display={['block', 'none']}>
              <GhostButton
                size={1}
                variant={navOpen ? 'active' : undefined}
                onClick={() => setNavOpen(!navOpen)}
              >
                {!navOpen && <HamburgerIcon />}
                {navOpen && <CrossIcon />}
              </GhostButton>
            </Box>
          </Flex>
        </Box>

        <Box display={[navOpen ? 'block' : 'none', 'block']}>
          { menu.map(menuItem => (
            <>
              <Divider mb={1} />
              <List>
                <Heading size={0} fontWeight={500} my={2} mx={5}>
                  {menuItem.fieldValue}
                </Heading>
                {menuItem.nodes.map(item => (
                  <NavItem
                    key={item.frontmatter.title}
                    to={item.fields.slug}
                    active={pathname === item.fields.slug}
                    onClick={() => setNavOpen(false)}
                  >
                    {item.frontmatter.title}
                  </NavItem>
                ))}
              </List>
            </>
          ))}

          <Divider mb={1} />

          <List>
            <Heading size={0} fontWeight={500} mx={5} mb={2} mt={2}>
              Links
            </Heading>
            {data.config.links.map(link => (
              <NavItem
                as="a"
                href={link.url}
                isExternal
              >
                {link.name}
              </NavItem>
            ))}
          </List>

          <Divider mb={1} />

          <Box px={5} mb={2} mt={3} minHeight={6}>
            <Text size={2}>
              Powered by{' '}
              <Link href="https://www.raytion.de/" title="Raytion">
                Raytion
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        pt={8}
        pb={9}
        marginLeft={[0, 200, 250]}
        maxWidth={['100%']}
        display={[navOpen ? 'none' : 'block', 'block']}
      >
        <Box maxWidth={720} px={6} margin="0px auto">{element}</Box>
      </Box>
    </>    
  );
}

export default App;
