import React from "react"
import {graphql} from "gatsby"
import PageDescriptionBox from "../components/PageDescriptionBox/PageDescriptionBox"
import Image from 'gatsby-image'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  width: 300px;
`

const ArticlesPage = ({data}) => (
  <>
    {console.log(data)}
    <PageDescriptionBox title="Articles"/>
    {data.allMdx.nodes.map(item => {
      console.log(item.frontmatter.postThumbnail.childImageSharp.fluid)
      return (
        <>
          <h3>{item.frontmatter.title}</h3>
          <p>{item.frontmatter.author}</p>
          <p>{item.frontmatter.excerpt}</p>
          <StyledImage fluid={item.frontmatter.postThumbnail.childImageSharp.fluid} alt="Thumbnail"/>
        </>
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
          author
          postThumbnail {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
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
