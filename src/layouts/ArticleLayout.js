import React from "react"
import Image from 'gatsby-image'
import {graphql} from 'gatsby'

export const query = graphql`
  query querySingleArticle($id: String!) {
  datoCmsArticle(id: {eq: $id}) {
    heading
    content
    image {
      fixed(width: 300) {
      ...GatsbyDatoCmsFixed
      }
    }
  }
}
`

const ArticleLayout = ({data: {datoCmsArticle: {heading, content, image}}}) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{content}</p>
      <Image fixed={image.fixed} />
    </div>
  )
}

export default ArticleLayout
