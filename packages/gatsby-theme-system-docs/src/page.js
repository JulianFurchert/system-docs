/** @jsx jsx */
import { jsx, Box, Heading, Text, Flex } from 'theme-ui'
import Layout from './layout'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { SourceLink, Status } from './components-system';

function DocPageTemplate({ 
  data, 
  title,
  description,
  ...props 
}) {
  const children = <MDXRenderer children={data.mdx.body} />;
  console.log(data.mdx.frontmatter)
  return (
    <Layout title={title} excerpt={description} {...props}>
      <Box mb={8} mt={8} mb={'100px'}>
        <Flex sx={{justifyContent: 'space-between', alignItems: 'center', mb: 8}}>
          <Heading variant="title">
            {data.mdx.frontmatter.title}
          </Heading>
          {data.mdx.frontmatter.status ? <Status mr={2} variant={data.mdx.frontmatter.status} /> : null} 
        </Flex>
        <Text variant="teaser" size={1} my={2}>
          {data.mdx.frontmatter.description}
        </Text>
        <Flex sx={{textAlign: 'center'}}>
          {data.mdx.frontmatter.source ? <SourceLink mr={2} href={data.mdx.frontmatter.source} /> : null} 
        </Flex>
      </Box>
      {children}
    </Layout>
  );
}

export default DocPageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        source
        status
      }
      body
    }
  }
`;
