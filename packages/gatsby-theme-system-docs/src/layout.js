import React from 'react'
import { Flex } from 'theme-ui'
import { Helmet } from 'react-helmet'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'

export default ({title, excerpt, ...props}) => (
  <>
    <Helmet>
      {title && <title>{title}</title>}
      {excerpt && <meta name="description" content={excerpt} />}
    </Helmet>
    <Header />
    <Flex>
      <Sidebar />
      <Main>
        {props.children}
      </Main>
    </Flex>
  </>
)