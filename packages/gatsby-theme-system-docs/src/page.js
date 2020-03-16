import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as RC from '@modulz/radix';
import Layout from './components/Layout';

function DocPageTemplate({ data, location, ...props }) {
  const children = <MDXRenderer children={data.mdx.body} />;

  return (
    <Layout pathname={location.pathname}>
      <Helmet>
        <title>Raytion — {data.mdx.frontmatter.title}</title>
        <meta property="og:title" content={`Radix — ${data.mdx.frontmatter.title}`} />
        <meta property="og:description" content={data.mdx.frontmatter.description} />
      </Helmet>
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
