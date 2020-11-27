import React from "react"
import {graphql} from "gatsby"
import PageDescriptionBox from "../components/PageDescriptionBox/PageDescriptionBox"
import Image from 'gatsby-image'
import styled from 'styled-components'
import {Link} from 'gatsby'
import slugify from "slugify"

const StyledImage = styled(Image)`
  width: 300px;
`

const ArticlesPage = ({data}) => (
  <>
    <PageDescriptionBox title="Articles"/>
    {data.allDatoCmsArticle.nodes.map(({heading, content, image}) => {
      return (
        <Link to={`/articles/${slugify(heading, {lower: true })}`}>
          <h3>{heading}</h3>
          <StyledImage fluid={image.fluid} alt="Thumbnail"/>
        </Link>
      )
    })}
  </>
)

export const query = graphql`
  query allDatoCmsArticle {
    allDatoCmsArticle {
      nodes {
        heading
        content
        image {
          fluid(maxWidth: 300) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
}
`

export default ArticlesPage
