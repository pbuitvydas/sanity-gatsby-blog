import React from 'react'
import LayoutContainer from "../containers/layout";
import Container from "../components/container";
import {responsiveTitle1} from "../components/typography.module.css";

const About = () => {
  return (
    <LayoutContainer mainImageSmall>
      <Container>
        <h1 className={responsiveTitle1}>About</h1>
        Test
      </Container>
    </LayoutContainer>
  )
}

export default About
