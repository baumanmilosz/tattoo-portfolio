import React from 'react';
import slugify from 'slugify';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { RouterPaths } from '../../constans/RouterPaths';

const ArticleWrapper = styled(Link)`
  position: relative;
  display:flex;
  justify-content: center;
  width: 400px;
`
;const StyledImage = styled(Image)`
  width: 300px;
  
`;

const ArticleItemDescription = styled.h3`
  position: absolute;
  bottom: 40px;
  right: 0;
  padding: 15px;
  font-weight: 600;
  background: #fff;
  color: #000;
  border-top: 3px solid #000;
  border-bottom: 3px solid #000;
  border-left: 3px solid #000;
`;

const ArticleItem = ({heading, image}) => {
  return (
    <ArticleWrapper to={`${RouterPaths.ARTICLES}/${slugify(heading, {lower: true })}`}>
      <StyledImage fluid={image.fluid} alt="Thumbnail"/>
      <ArticleItemDescription>{heading}</ArticleItemDescription>
    </ArticleWrapper>
  );
};

export default ArticleItem;
