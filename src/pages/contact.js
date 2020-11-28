import React from 'react';
import styled from 'styled-components';
import PageDescriptionBox from '../components/PageDescriptionBox/PageDescriptionBox';
import { PageDescriptionBoxContent } from '../constans/PageDescriptionBoxContent';
import FormInputField from '../components/FormFields/FormInputField/FormInputField';
import CommonButton from '../components/CommonButton';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

const ContactWrapper = styled.div`
  position: relative;
`;
const StyledImage = styled(Image)`
  width: 50%;
  position: absolute !important;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const {
  title,
  description,
} = PageDescriptionBoxContent.CONTACT_PAGE;

const Contact = ({ data }) => {
  return (
    <ContactWrapper>
      <PageDescriptionBox
        title={title}
        description={description}
      />
      <form>
        <FormInputField label="name" />
        <FormInputField label="email" />
        <FormInputField
          label="message"
          type="textarea"
        />
        <CommonButton label="send message" />
      </form>
      <StyledImage
        fixed={data.file.childImageSharp.fixed}
        alt="Hero"
      />
    </ContactWrapper>
  );
};

export const query = graphql`
  {
    file(name: { eq: "hero2" }) {
      childImageSharp {
        fixed(width: 600, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

export default Contact;
