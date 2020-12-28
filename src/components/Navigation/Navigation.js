import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { RouterPaths } from '../../constans/RouterPaths';

const NavigationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  z-index: 300;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const PageLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 700;

  span {
    padding: 5px;
    background-color: #000;
    color: #fff;
    font-size: 15px;
  }
`;

const NavigationList = styled.ul`
  display: flex;
`;

const NavigationListItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 32px;
  font-size: 22px;
  font-weight: 600;
 
`;

const NavigationListItemLink = styled(Link)`
  padding: 5px 10px;
  color: #000;
  &.active,
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const NavigationListItems = [
  {
    name: `about`,
    path: RouterPaths.ABOUT,
  },
  {
    name: `articles`,
    path: RouterPaths.ARTICLES,
  },
  {
    name: `gallery`,
    path: RouterPaths.GALLERY,
  },
  {
    name: `contact`,
    path: RouterPaths.CONTACT,
  },
];

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Link to={RouterPaths.HOME}>
        <PageLogo>
          <span>Amanda</span> Piejak
        </PageLogo>
      </Link>
      <NavigationList>
        {NavigationListItems.map(
          ({ name, path }) => (
            <NavigationListItem key={path}>
              <NavigationListItemLink
                to={path}
                activeClassName="active"
              >
                {name}
              </NavigationListItemLink>
            </NavigationListItem>
          ),
        )}
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
