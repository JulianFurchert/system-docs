/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useMDXComponents, mdx } from '@mdx-js/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Block, BlockHeader, BlockToggleButton, BlockPanel } from './Block'

export const liveEditorStyle = {
  fontSize: 13,
  marginBottom: 32,
  marginTop: 12,
  overflowX: "auto",
  fontFamily: "Menlo,monospace",
  borderRadius: 10,
};

const liveTheme = { styles: [] }

export const CodeBlock =  ({ children, live, removeFragment, gray }) => {
  const components = useMDXComponents();

  const liveProviderProps = {
    transformCode: code => (removeFragment ? code : `<>${code}</>`),
    scope: { mdx, ...components },
  };

  if (live) {
    return (
      <Block>
        <LiveProvider 
          code={children.trim()}
          theme={liveTheme} 
          {...liveProviderProps} 
        >
          <BlockHeader
            sx={{
              backgroundColor: gray ? 'gray75' : 'background',
            }}
          >
            <LivePreview />
          </BlockHeader>
          <BlockToggleButton />
          <BlockPanel>
            <LiveEditor
              sx={{
                variant: 'prism',
                fontSize: 13,
                fontFamily: 'monospace',
                lineHeight: 1.5,
              }}
              css={{ textarea: { outline: 0 } }}
            />
          </BlockPanel>
        </LiveProvider>
        <LiveError />
      </Block>
    );
  }

  return (
    <Block>
      <Box
        sx={{
          p: 1,
          bg: 'gray75',
          outline: 'none',
        }}
      >
        <LiveProvider 
            code={children.trim()} 
            theme={liveTheme} 
            {...liveProviderProps} 
          >
          <LiveEditor
            sx={{
              variant: 'prism',
              fontSize: 13,
              fontFamily: 'monospace',
              lineHeight: 1.5,
            }}
            css={{ textarea: { outline: 0 } }}
            disabled
          />
        </LiveProvider>
      </Box>
    </Block>
  );
};
