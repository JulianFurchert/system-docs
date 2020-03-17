export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  radii: [0, 4],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    primary: '#2680EB',
    secondary: '#2680EB',
    gray50: '#FFFFFF',
    gray75: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#EAEAEA',
    gray300: '#E1E1E1',
    gray400: '#CACACA',
    gray500: '#B3B3B3',
    gray600: '#8E8E8E',
    gray700: '#6E6E6E',
    gray800: '#4B4B4B',
    gray900: '#2C2C2C',
    // based on gray
    text: '#2C2C2C',
    background: '#FFFFFF',
  },
  modes: {
    dark: {
      primary: '#2680EB',
      secondary: '#2680EB',
      gray50: '#080808',
      gray75: '#1A1A1A',
      gray100: '#1E1E1E',
      gray200: '#2C2C2C',
      gray300: '#393939',
      gray400: '#494949',
      gray500: '#5C5C5C',
      gray600: '#7C7C7C',
      gray700: '#A2A2A2',
      gray800: '#C8C8C8',
      gray900: '#EFEFEF',
      // based on gray
      text: '#EFEFEF',
      background: '#080808',
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    navTitle: {
      fontFamily: 'heading',
      fontSize: '11px',
      fontWeight: 'body',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'gray700'
    },
  },
  links: {
    nav: {
      display: 'block',
      width: '100%',
      px: 2,
      py: 1,
      color: 'text',
      textDecoration: 'none',
      fontSize: 1,
      borderRadius: 1,
      fontWeight: 'body',
      bg: 'transparent',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.2s',
      borderRadius: 2,
      cursor: 'pointer',
      '&:hover': {
        bg: 'gray100',
        color: 'text'
      },
      '&[data-active]': {
        bg: 'gray100',
        color: 'text'
      },
    }
  },
  badges: {
    primary: {
      color: 'background',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  // mdx styles
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}