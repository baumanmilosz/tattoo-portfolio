import React from "react"
import PageDescriptionBox from "../components/PageDescriptionBox/PageDescriptionBox"
import Image from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`

const GalleryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px
`

const GalleryImage = styled(Image)`
  width: 300px;
`

const GalleryPage = ({data: {allMdx: {nodes}}}) => (
  <Wrapper>
    {console.log(nodes)}
    <PageDescriptionBox title="Gallery"/>
    <GalleryWrapper>
      {nodes.map(({frontmatter}) => (
        <GalleryImage fluid={frontmatter.galleryThumbnail.childImageSharp.fluid}/>
      ))}
    </GalleryWrapper>
  </Wrapper>
)

export const query = graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "/gallery/"}}) {
      nodes {
        frontmatter {
          galleryThumbnail {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default GalleryPage
