/** @jsx jsx */
import { jsx } from 'theme-ui'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { theme as radixTheme, Box } from '@modulz/radix';
const { colors } = radixTheme;

export const liveEditorStyle = {
  fontSize: 13,
  marginBottom: 32,
  marginTop: 12,
  overflowX: "auto",
  fontFamily: "Menlo,monospace",
  borderRadius: 10,
};

const theme = {
  plain: {
    color: colors.gray800,
    backgroundColor: colors.gray100,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.gray600,
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: 'hsl(180, 55%, 35%)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'hsl(195, 90%, 35%)',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: 'hsl(180, 50%, 35%)',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.blue700,
      },
    },
  ],
};

export default ({ children, live, removeFragment, gray }) => {
  const components = useMDXComponents();

  const liveProviderProps = {
    transformCode: code => (removeFragment ? code : `<>${code}</>`),
    scope: { mdx, ...components },
  };

  if (live) {
    return (
      <Box mt={4}>
        <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
          <LivePreview
            style={{
              backgroundColor: gray ? colors.gray200 : 'white',
              padding: radixTheme.space[4],
              border: `1px solid ${colors.gray300}`,
              borderTopLeftRadius: radixTheme.radii[3],
              borderTopRightRadius: radixTheme.radii[3],
            }}
          />
          <LiveEditor
            padding={radixTheme.space[3]}
            style={{
              borderBottomLeftRadius: radixTheme.radii[3],
              borderBottomRightRadius: radixTheme.radii[3],
              border: `1px solid ${colors.gray300}`,
              borderTop: 'none',
              fontSize: 13,
              fontFamily: radixTheme.fonts.mono,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
            css={{ textarea: { outline: 0 } }}
          />

          <LiveError />
        </LiveProvider>
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
        <LiveEditor
          padding={radixTheme.space[3]}
          style={{
            borderRadius: radixTheme.radii[3],
            border: `1px solid ${colors.gray300}`,
            fontSize: 13,
            fontFamily: radixTheme.fonts.mono,
            fontWeight: 400,
            lineHeight: 1.5,
          }}          
          css={{ textarea: { paddingBottom: '0 !important' } }}
          disabled
        />
      </LiveProvider>
    </Box>
  );
};
