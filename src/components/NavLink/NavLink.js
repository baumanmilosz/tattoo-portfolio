import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationListItemLink = styled(Link)`
  padding: 5px 10px;
  background-color: ${(props)=> console.log(props)}
 
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const NavLink = props => (
  <NavigationListItemLink
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "red" : "blue"
        }
      };
    }}
  />
);

export default NavLink;
