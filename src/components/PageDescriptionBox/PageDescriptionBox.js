import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 30px 0;

`

const PageDescriptionBox = ({title, description}) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{description}</p>
    </Wrapper>
  )
}

export default PageDescriptionBox
