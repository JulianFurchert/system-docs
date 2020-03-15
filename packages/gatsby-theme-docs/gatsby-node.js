/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const crypto = require("crypto");
const fs = require("fs")
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Link implements Node {
      name: String,
      url: String
    }
    type DocsConfig implements Node {
      title: String!,
      version: String!,
      redirect: String!,
      links: [Link]!
      menu: [String]!
    }`
  )
}

exports.sourceNodes = ({ actions: { createNode } }, options) => {
  const title = options.title || 'Raytion Docs'
  const version = options.version || '1.0.0'
  const links = options.links || []
  const menu = options.menu || []
  const redirect = options.menu || '/docs'

  // create garden data from plugin config
  const notesConfig = {
    title,
    version,
    links,
    menu,
    redirect
  };
  
  createNode({
    ...notesConfig,
    id: `gatsby-theme-raytion-docs`,
    parent: null,
    children: [],
    internal: {
      type: `DocsConfig`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(notesConfig))
        .digest(`hex`),
      content: JSON.stringify(notesConfig),
      description: `Notes Config`
    }
  });
};

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter, actions }) => {
  const { createNode } = actions
  const contentPath = "src/docs"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = require.resolve('./src/templates/doc-page.js');

  const allDocs = await graphql(
    `
      {
        allMdx(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (allDocs.errors) {
    console.error(`Error in allDocs: ${allDocs.errors}`);
    throw Error(`Error in allDocs: ${allDocs.errors}`);
  }

  // Dynamically create a page for each markdown file with layout: post
  allDocs.data.allMdx.edges.forEach((post, index) => {
    const { slug } = post.node.fields;

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }, options) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
