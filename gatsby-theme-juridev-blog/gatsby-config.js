module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `content`,
        name: 'content'
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 1035
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    // emoji support
    'gatsby-plugin-emotion',

    // intercepts all links and replaces with proper react links
    // to avoid page refreshes
    'gatsby-plugin-catch-links',

    // control the document head
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMdx } }) => {
    //           return allMdx.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.fields.date,
    //               url: site.siteMetadata.siteUrl + '/' + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + '/' + edge.node.fields.slug
    //             });
    //           });
    //         },
    //         query: `
    //           {
    //             allMdx(
    //               limit: 1000,
    //               filter: { frontmatter: { published: { ne: false } } }
    //               sort: { order: DESC, fields: [frontmatter___date] }
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt(pruneLength: 250)
    //                   fields {
    //                     slug
    //                     date
    //                   }
    //                   frontmatter {
    //                     title
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: 'Blog RSS Feed'
    //       }
    //     ]
    //   }
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/lib/typography`
      }
    }
  ]
};
