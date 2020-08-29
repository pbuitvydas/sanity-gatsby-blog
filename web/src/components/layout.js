import React from 'react'

import '../styles/layout.css'
import HeaderLinks from "./Header/HeaderLinks";
import Parallax from "./Parallax/Parallax";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import Footer from "./Footer/Footer";
import styles from "../assets/jss/material-kit-react/views/landingPage";
import {makeStyles} from "@material-ui/core/styles";
import Header from "./Header/Header";

const useStyles = makeStyles(styles);

const Layout = ({children, siteTitle, mainImageUrl, mainImageSmall}) => {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        routes={[]}
        brand={siteTitle}
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax small={mainImageSmall} filter image={mainImageUrl || require("../assets/img/DSC01867.jpg")}>
        {!mainImageSmall && (
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big bold
                  title, that{"'"}s why we added this text here. Add here all the
                  information that can make you or your product create the first
                  impression.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        )}
      </Parallax>
      <div className={`${classes.main} ${classes.mainRaised}`}>
        <div className={classes.container}>
          {children}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout
