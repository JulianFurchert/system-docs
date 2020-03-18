export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  radii: [0, 4, 8],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  useCustomProperties: false,
  colors: {
    primary: '#2680EB',
    highlight: '#E5F0FD',
    // accents
    purple: '#5151D3',
    magenta: '#BC1C74',
    green: '#0F797D',
    // grays
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
    modes: {
      dark: {
        primary: '#2680EB',
        highlight: '#1D2835',
        // accents
        purple: '#8282F6',
        magenta: '#EC5AAA',
        green: '#23B2B8',
        // grays
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
        text: '#EFEFEF', //gray900
        background: '#080808', //gray50
      }
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    title: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '45px',
    },
    headline: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '23px',
    },
    headlineSmall: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '19px',
    },
    overline: {
      fontFamily: 'heading',
      fontSize: '12px',
      fontWeight: 'body',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'gray700'
    },
    teaser: {
      fontFamily: 'body',
      fontSize: '20px',
      fontWeight: 'body',
      color: 'gray700'
    },
    body: {},
    code: {}
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
      cursor: 'pointer',
      '&:hover': {
        bg: 'gray100',
        color: 'text'
      },
      '&[data-active]': {
        bg: 'primary',
        color: 'white'
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
  code: {
    fade: {
      color: 'gray700',
      bg: 'gray100',
    },
    outline: {
      color: 'gray700',
      bg: 'gray50',
      border: '1px solid',
      borderColor: 'gray200',
    }
  },
  prism: {
    color: 'gray800',
    '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
      color: 'gray700',
    },
    '.comment': {
      fontStyle: 'italic',
    },
    '.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable': {
      color: 'primary',
    },
    '.atrule,.attr-value,.keyword': {
      color: 'magenta',
    },
    '.selector,.attr-name,.string,.char,.builtin,.inserted': {
      color: 'green',
    },
  },
  // mdx styles
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    p: {
      color: 'gray700',
      mt: 1,
    },
    h1: {
      variant: 'text.heading',
      fontSize: '23px',
      mt: 12,
    },
    h2: {
      variant: 'text.heading',
      fontSize: '23px',
      mt: 12,
    },
    h3: {
      variant: 'text.heading',
      fontSize: '19px',
      mt: 10,
      mb: 1
    },
    h4: {
      variant: 'text.heading',
      fontSize: '19px',
      mt: 10,
      mb: 1
    },
    h5: {
      variant: 'text.heading',
      fontSize: '19px',
      mt: 10,
      mb: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: '19px',
      mt: 10,
      mb: 1
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
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
    th: {
      p: 3,
      pl: 0,
      borderBottom: '1px solid',
      borderColor: 'gray300',
      variant: 'text.overline',
      textAlign: 'left',
    },
    td: {
      textAlign: 'left',
      color: 'gray700',
      p: 3,
      pl: 0,
      fontSize: 13,
      textAlign: 'left',
      borderBottom: '1px solid',
      borderColor: 'gray300',
    },
  },
}