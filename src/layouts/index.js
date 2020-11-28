import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from 'styled-components'

const Index = ({ children }) => {

  const Wrapper = styled.div`
    position: relative;
    width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 30px;
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
