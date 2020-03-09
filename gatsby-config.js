module.exports = {
  pathPrefix: '/docsbleez',
  siteMetadata: {
    title: `Document by Code Bushi`,
    name: `Code Bushi`,
    siteUrl: `https://sport129.github.io/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [
    { 
      resolve: `gatsby-theme-document` 
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    }
  ]
};
