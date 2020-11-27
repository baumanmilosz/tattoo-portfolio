const path = require(`path`)
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/layouts/ArticleLayout.js`)

const result = await graphql(`
query queryCMSPage {
  allDatoCmsArticle {
    nodes {
      id
      heading
    }
  }
}
`);

  result.data.allDatoCmsArticle.nodes.forEach(article => {
    const slugifiedHeading = slugify(article.heading, {lower: true})
    console.log(slugifiedHeading)
    createPage({
      path: `articles/${slugifiedHeading}`,
      component: articleTemplate,
      context: {
        id: article.id
      },
    })
  })
}
