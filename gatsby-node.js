const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/layouts/ArticleLayout.js`)

const result = await graphql(
  `
    query queryArticles {
      allMdx {
        nodes {
          frontmatter {
           slug
          }
        }
      }
    }
  `,
);

  result.data.allMdx.nodes.forEach(article => {
    createPage({
      path: `articles/${article.frontmatter.slug}`,
      component: articleTemplate,
      context: {
        slug: article.frontmatter.slug
      },
    })
  })
}
