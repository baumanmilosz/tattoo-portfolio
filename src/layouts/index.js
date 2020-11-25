import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from 'styled-components'

const Index = ({ children }) => {

  const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
`
  return (
    <Wrapper>
      <GlobalStyle/>
      <Navigation/>
      {children}
    </Wrapper>
  )
}

export default Index
