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
      <Box mb={8} mt={8}>
        <Heading variant="title" mb={2}>
          {data.mdx.frontmatter.title}
        </Heading>
        <Text variant="teaser" size={1} mt={3} mb="100px">
          {data.mdx.frontmatter.description}
        </Text>
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
      }
      body
    }
  }
`;
