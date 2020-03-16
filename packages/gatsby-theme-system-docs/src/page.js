import React from 'react';
import { Layout } from 'gatsby-theme-ui-layout'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as RC from '@modulz/radix';

function DocPageTemplate({ 
  data, 
  location, 
  title,
  description,
  ...props 
}) {
  const children = <MDXRenderer children={data.mdx.body} />;

  return (
    <Layout title={title} excerpt={description} {...props}>
      <RC.Box>
        <RC.Heading size={4} fontWeight={500} mb={2} lineHeight={4}>
          {data.mdx.frontmatter.title}
        </RC.Heading>
        <RC.Heading size={1} mb={7} as="h2" lineHeight={3} textColor="gray700">
          {data.mdx.frontmatter.description}
        </RC.Heading>
        {children}
      </RC.Box>
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
