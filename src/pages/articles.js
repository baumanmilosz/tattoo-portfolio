import React from "react"
import {graphql} from "gatsby"
import PageDescriptionBox from "../components/PageDescriptionBox/PageDescriptionBox"
import Image from 'gatsby-image'
import styled from 'styled-components'
import {Link} from 'gatsby'

const StyledImage = styled(Image)`
  width: 300px;
`

const ArticlesPage = ({data}) => (
  <>
    <PageDescriptionBox title="Articles"/>
    {data.allMdx.nodes.map(item => {
      return (
        <Link to={`/articles/${item.frontmatter.slug}`}>
          <h3>{item.frontmatter.title}</h3>
          <p>{item.frontmatter.author}</p>
          <p>{item.frontmatter.excerpt}</p>
          <StyledImage fluid={item.frontmatter.postThumbnail.childImageSharp.fluid} alt="Thumbnail"/>
        </Link>
      )
    })}
  </>
)

export const query = graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "/articles/"}}) {
      nodes {
        frontmatter {
          title
          slug
          author
          postThumbnail {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          
        }
        excerpt(pruneLength: 10)
      }
    }
  }


`

export default ArticlesPage
