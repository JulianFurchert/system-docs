import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { RadixProvider } from '@modulz/radix';
import { theme } from './theme';

export { wrapPageElement } from './src/wrapPageElement';

export const  wrapRootElement = ({ element }) => {
  return (
    <RadixProvider theme={theme}>
      <StaticRouter>
        {element}
      </StaticRouter>
    </RadixProvider>
  )
}