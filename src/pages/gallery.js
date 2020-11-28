import React from 'react';
import PageDescriptionBox from '../components/PageDescriptionBox/PageDescriptionBox';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { PageDescriptionBoxContent } from '../constans/PageDescriptionBoxContent';
import { graphql } from 'gatsby';

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;

const GalleryImage = styled(Image)`
  width: 300px;
`;

const {
  title,
  description,
} = PageDescriptionBoxContent.GALLERY_PAGE;

const GalleryPage = ({data}) => (
  <>
    <PageDescriptionBox
      title={title}
      description={description}
    />
    <Wrapper>
      <GalleryWrapper>
        {data.allDatoCmsGalleryitem.nodes.map(({ galleryimage }) => (
          <GalleryImage
            key={galleryimage}
            fluid={
              galleryimage.fluid
            }
          />
        ))}
      </GalleryWrapper>
    </Wrapper>
  </>
);

export const query = graphql`
  query allDatoCmsGalleryItem {
    allDatoCmsGalleryitem {
      nodes {
        galleryimage {
          fluid(maxWidth: 300) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
  }
`;

export default GalleryPage;
