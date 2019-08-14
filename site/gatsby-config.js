module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-juridev-blog',
      options: {
        contentPath: 'content/blog',
        basePath: '/blog'
      }
    }
    // ,
    // {
    //   resolve: '@jlengstorf/gatsby-theme-events',
    //   options: {
    //     contentPath: 'data',
    //     basePath: '/events'
    //   }
    // }
  ]
};
