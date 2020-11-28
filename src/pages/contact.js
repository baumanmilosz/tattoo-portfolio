import React from "react"
import PageDescriptionBox from "../components/PageDescriptionBox/PageDescriptionBox"
import { PageDescriptionBoxContent } from '../constans/PageDescriptionBoxContent';

const {
  title,
  description,
} = PageDescriptionBoxContent.CONTACT_PAGE;

const Contact = () => {
  return (
    <>
      <PageDescriptionBox title={title} description={description}/>
    </>
  )
}

export default Contact
