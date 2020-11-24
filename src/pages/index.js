import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const HeroWrapper = styled.div`
  width: 600px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InfoBoxWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 45px;
  }
`

const Image = styled.img`
  width: 100%;
`

const Button = styled.button`
  align-self: flex-end;
  padding: 10px 15px;
  background: #000;
  color: #fff;
  border: 2px solid #000;
  font-size: 13px;
  letter-spacing: 2px;
  z-index: 1;
`

const IndexPage = ({ data }) => (
  <HeroWrapper>
    <InfoBoxWrapper>
      <h2>Tattoo artist</h2>
      <Button>estimate project</Button>
    </InfoBoxWrapper>
    <Image
      src={data.file.childImageSharp.fluid.src}
      srcSet={data.file.childImageSharp.fluid.srcSet}
      sizes={data.file.childImageSharp.fluid.sizes}
      alt="Hero"
    />
  </HeroWrapper>
)

export const query = graphql`
  {
    file(name: {eq: "hero"}) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default IndexPage
