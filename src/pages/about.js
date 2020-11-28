import React from 'react';
import styled from 'styled-components';
import { PageDescriptionBoxContent } from '../constans/PageDescriptionBoxContent';
import PageDescriptionBox from '../components/PageDescriptionBox/PageDescriptionBox';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

const PageWrapper = styled.div`
  position: relative;
`;
const InfoWrapper = styled.div`
  width: 50%;
`;

const BioWrapper = styled.div`
  margin-top: 50px;
  padding: 50px 0;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;
`;

const StyledParagraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.75;
`;

const StyledAuthor = styled.p`
  text-align: right;
  font-size: 25px;
  font-weight: 700;
`;
const PageHeroImage = styled(Image)`
  position: absolute !important;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const {
  title,
  description,
} = PageDescriptionBoxContent.ABOUT_PAGE;

const AboutPage = ({ data }) => {
  console.log(PageDescriptionBoxContent);
  return (
    <PageWrapper>
      <InfoWrapper>
        <PageDescriptionBox
          title={title}
          description={description}
        />
        <BioWrapper>
          <StyledParagraph>
            Art invites evasion, even when
            engraved in the flesh. On the
            contrary, the ink under the dermis
            reminds us of the dreams that are
            deepest within us and encourages us to
            explore the world. In this
            perspective, Amanda Piejak's tattoos
            are real bubbles of freedom.
          </StyledParagraph>
          <StyledParagraph>
            This Warsaw-based artist encourages us
            to travel and dream with her
            hyper-realistic works, created with
            the help of thousands of points. Its
            round, sometimes rectangular motifs
            contain idyllic memories filled with
            light and peace. Perfect beaches,
            splendid mountains, and other ideal
            holiday destinations are waiting for
            you in her portfolio. And even no need
            for color, the feeling of the sun, the
            spray and the smell of the undergrowth
            are there, captured under the skin.
          </StyledParagraph>
          <StyledAuthor>
            Amanda Piejak
          </StyledAuthor>
        </BioWrapper>
      </InfoWrapper>
      <PageHeroImage
        fixed={data.file.childImageSharp.fixed}
      />
    </PageWrapper>
  );
};

export const query = graphql`
  {
    file(name: { eq: "about_hero" }) {
      childImageSharp {
        fixed(width: 550, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
