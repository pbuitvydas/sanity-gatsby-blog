import '../styles/layout.css'

import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'

import Footer from './footer'
import Header from './header'

const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (min-width: 576px)': {
      maxWidth: '540px'
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px'
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    }
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  mainImage: {
    maxHeight: '1000px',
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center'
  }
}))

const Layout = ({children, siteTitle, mainImageUrl, mainImageSmall}) => {
  const classes = useStyles()
  return (
    <div>
      <Header title={siteTitle} />
      <div className={classes.mainImage} style={{
        backgroundImage: `url(${mainImageUrl || require('../assets/img/DSC01867.jpg')})`,
        height: mainImageSmall ? '380px' : '90vh'
      }}>
        {!mainImageSmall && (
          <div className={classes.container}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big bold
                  title, that{"'"}s why we added this text here. Add here all the
                  information that can make you or your product create the first
                  impression.
                </h4>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
      <div className={`${classes.main} ${classes.mainRaised}`}>
        <div className={classes.container}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
