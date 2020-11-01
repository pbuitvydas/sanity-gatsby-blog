import {List, ListItem} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'gatsby'
import React from 'react'

import {container, primaryColor} from '../assets/jss/material-kit-react'

const useStyles = makeStyles((theme) => ({
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  left: {
    float: 'left!important',
    display: 'block'
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important'
  },
  footer: {
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative'
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent'
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0'
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px'
  }
}))

export default function Footer (props) {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to='/about'>About us</Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to='/archive'>Blog</Link>
            </ListItem>
          </List>
        </div>
        <div className={`${classes.right} ${classes.block}`}>
          &copy; {1900 + new Date().getYear()} , Two Exploring Souls
        </div>
      </div>
    </footer>
  )
}
