import React from 'react';
import { graphql } from 'gatsby';
import PageDescriptionBox from '../components/PageDescriptionBox/PageDescriptionBox';
import { PageDescriptionBoxContent } from '../constans/PageDescriptionBoxContent';
import ArticleItem from '../components/ArticleItem/ArticleItem';
import styled from 'styled-components';

const ArticlesWrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px
`;

const {
  title,
  description,
} = PageDescriptionBoxContent.ARTICLES_PAGE;

const ArticlesPage = ({ data }) => (
  <>
    <PageDescriptionBox
      title={title}
      description={description}
    />
    <ArticlesWrapper>
      {data.allDatoCmsArticle.nodes.map(
        ({ id, heading, image }) => {
          return (
            <ArticleItem
              key={id}
              heading={heading}
              image={image}
            />
          );
        },
      )}
    </ArticlesWrapper>
  </>
);

export const query = graphql`
  query allDatoCmsArticle {
    allDatoCmsArticle {
      nodes {
        id
        heading
        content
        image {
          fluid(maxWidth: 300) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
