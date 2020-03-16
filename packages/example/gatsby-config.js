module.exports = {
  plugins: [
    { 
      resolve: `gatsby-theme-system-docs`,
      options: {
        title: 'Example',
        version: '1.0.1',
        defaultPath: '/docs/getting-started/',
        menu: [
          'Overview', 
          'Components'
        ],
        links: [
          { name: 'Github', url: '#' },
          { name: 'Themer', url: '#' },
        ],
      }
    }
  ]
}
