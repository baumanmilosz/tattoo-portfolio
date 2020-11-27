import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from 'gatsby-image'
import {graphql} from 'gatsby'

export const query = graphql`
  query querySingleArticle($slug: String!) {
  mdx(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      slug
      author
      postThumbnail {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
    body
  }
}
`

const ArticleLayout = ({data: {mdx: {frontmatter, body}}}) => {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.author}</p>
      <Image fixed={frontmatter.postThumbnail.childImageSharp.fixed}/>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

export default ArticleLayout
