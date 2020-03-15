module.exports = {
  siteMetadata: {
    title: `Gatsby`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        "allowSyntheticDefaultImports": true,
        "declaration": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "jsx": "react",
        "module": "esnext",
        "moduleResolution": "node",
        "noEmit": true,
        "outDir": "dist",
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strict": true,
        "target": "es5"
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'hsl(208, 98%, 50%)',
        showSpinner: false,
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],

        remarkPlugins: [require('remark-slug'), require('remark-autolink-headings')],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `src/docs`,
      },
    },
    'gatsby-plugin-netlify',
  ],
};
