/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React, { useState, createContext, useContext } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from "@reach/disclosure";
import { ChevronDown, ChevronRight } from 'react-feather';

const BlockContext = createContext({ isOpen: false })

const Block = React.forwardRef(({ children, ...props }, ref) => {
  const [isOpen, setOpen] = useState(false);
  return(
    <Box 
      ref={ref}
      __themeKey="block.container"
      sx={{
        border: `1px solid`,
        borderColor: 'gray300',
        borderRadius: 2,
        overflow: 'hidden'
      }}
      {...props }
      >
      <Disclosure 
        open={isOpen} 
        onChange={() => setOpen(!isOpen)}
      >
        <BlockContext.Provider value={{isOpen}}>
          {children}
        </BlockContext.Provider>
      </Disclosure>
    </Box>
  )
})

const BlockHeader = React.forwardRef(({ children, ...props }, ref) => (
  <Box 
    __themeKey="block.header"
    ref={ref}
    sx={{p: 4}} 
    {...props}
  >
    {children}
  </Box>
))

const BlockToggleButton = ({ children, ...props }) => {
  const { isOpen } = useContext(BlockContext);

  return (
    <DisclosureButton 
      __themeKey="block.toggleButton"
      sx={{
        height: 40,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        border: 'none',
        bg: 'gray75',
        borderTop: '1px solid',
        borderColor: 'gray200',
        color: 'gray700',
        outline: 'none',
        py: 0,
        px: 3,
        fontSize: 14,
        cursor: 'pointer',
        '&:hover':{
          bg: 'gray100',
        }
      }} 
      {...props }
    >
      {children ? children : (
        <React.Fragment>
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16}></ChevronRight>}
          <Text
            sx={{
              ml: 1,
            }}
          >
            Code Editor
          </Text>
        </React.Fragment>
      )}
    </DisclosureButton>
  )
}

const BlockPanel = ({ children, ...props }) => (
  <DisclosurePanel
    __themeKey="block.panel"
    sx={{
      p: 2,
      borderTop: '1px solid',
      borderColor: 'gray200',
      bg: 'gray75',
      outline: 'none',
    }} 
    {...props }
  >
    {children}
  </DisclosurePanel>
)

export { Block, BlockHeader, BlockToggleButton, BlockPanel } 