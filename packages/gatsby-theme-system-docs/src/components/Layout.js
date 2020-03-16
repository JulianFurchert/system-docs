import React from 'react';
import Helmet from 'react-helmet';

function Layout({ children, ...props }) {
  return (
    <>
      <Helmet>
        <title>Radix</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:url" content="https://radix.modulz.app/" />
        <meta property="og:title" content="Radix" />
        <meta property="og:description" content="Design System and Component Library for Modulz" />
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
