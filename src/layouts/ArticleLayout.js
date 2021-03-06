import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const ArticleLayoutWrapper = styled.div`
  display: flex;
`;

const ArticleHeaderWrapper = styled.div`
  flex-basis: 300px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  background-image: ${({ background }) =>
    `url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
`;

const ArticleDetailsHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
`;

const ArticleDetailsReleaseDate = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const StyledContent = styled.p`
  flex-basis: 100%;
  line-height: 2;
`;

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      heading
      content
      releasedate
      image {
        fixed(width: 300) {
          src
        }
      }
    }
  }
`;

const ArticleLayout = ({
  data: {
    datoCmsArticle: { heading, content, image, releasedate },
  },
}) => {
  return (
    <ArticleLayoutWrapper>
      <ArticleHeaderWrapper
        background={image.fixed.src}
      >
        <ArticleDetailsHeading>
          {heading}
        </ArticleDetailsHeading>
        <ArticleDetailsReleaseDate>
          {releasedate}
        </ArticleDetailsReleaseDate>
      </ArticleHeaderWrapper>
      <StyledContent>{content}</StyledContent>
    </ArticleLayoutWrapper>
  );
};

export default ArticleLayout;
