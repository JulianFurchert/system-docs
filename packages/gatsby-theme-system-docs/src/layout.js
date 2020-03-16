import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from './components/sidebar'
import Main from './components/main'

export default ({title, excerpt, ...props}) => (
  <>
    <Helmet>
      {title && <title>{title}</title>}
      {excerpt && <meta name="description" content={excerpt} />}
    </Helmet>
    <div>
      <Sidebar />
      <Main>
        {props.children}
      </Main>
    </div>
  </>
)