/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui'
import Layout from './layout'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

function DocPageTemplate({ 
  data, 
  title,
  description,
  ...props 
}) {
  const children = <MDXRenderer children={data.mdx.body} />;

  return (
    <Layout title={title} excerpt={description} {...props}>
      <Box mt={2}>
        <Heading variant="title" mb={2}>
          {data.mdx.frontmatter.title}
        </Heading>
        <Text size={1} mb={7} lineHeight={3} textColor="gray700">
          {data.mdx.frontmatter.description}
        </Text>
        {children}
      </Box>
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
      }
      body
    }
  }
`;
