import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { RouterPaths } from "../../constans/RouterPaths"

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
    a {
    text-decoration: none;
    color: inherit;
  }
`
const PageLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 700;
`

const NavigationList = styled.ul`
  display: flex;
`;

const NavigationListItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 32px;
  font-size: 18px;
  font-weight: 600;
`

const NavigationListItems = [
  {
    name: `articles`,
    path: RouterPaths.ARTICLES
  },
  {
    name: `about`,
    path: RouterPaths.ABOUT
  },
  {
    name: `gallery`,
    path: RouterPaths.GALLERY
  },
  {
    name: `contact`,
    path: RouterPaths.CONTACT
  }
];

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Link to={RouterPaths.HOME}><PageLogo>MBauman</PageLogo></Link>
    <NavigationList>
      {NavigationListItems.map(({ name, path }) => (
        <NavigationListItem key={path}>
          <Link to={path}>{name}</Link>
        </NavigationListItem>
      ))}
    </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
