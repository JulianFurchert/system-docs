/** @jsx jsx */
import { jsx, Box, Flex, Heading, Text, Badge, Divider } from 'theme-ui'
import { Link } from 'gatsby';
import navItems from '../nav.yml'

export default ({ children, ...props }) => {
  return(
    <Box
      sx={{
        position: 'sticky',
        top: '0',
        flexShrink: 0,
        width: ['100%', 200, 250],
        height: ['auto', '100vh'],
        overflow: ['auto', 'scroll'],
        pb: [0, 8],
        borderRight: '2px solid',
        borderColor: 'gray200',
        variant: "sidebar"
      }}
      {...props}
    >
      <Box>
        {navItems.map(navItem => (
          <Box sx={{mt: 6}}>
            <Heading variant="navTitle" sx={{my: 2, mx: 5}}>
              {navItem.categorie}
            </Heading>
            {navItem.pages && navItem.pages.map(item => (
              <Link
                key={item.title}
                to={item.url}
                sx={{
                  variant: "links.nav",
                  my: 1, 
                  mx: 3
                }}
              >
                {item.title}
              </Link>
            ))}
            {/* <Divider sx={{mx: 3, my:4, color: 'gray400'}} /> */}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
