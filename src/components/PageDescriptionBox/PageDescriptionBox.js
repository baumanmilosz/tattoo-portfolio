import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 500px;
  margin: 30px 0;
  line-height: 2;

`
const StyledTitle = styled.h2`
  font-size: 40px;

`

const PageDescriptionBox = ({title, description}) => {
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <p>{description}</p>
    </Wrapper>
  )
}

export default PageDescriptionBox
