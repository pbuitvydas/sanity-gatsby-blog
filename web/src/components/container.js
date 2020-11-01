import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    maxWidth: '960px',
    padding: '1.5em',
    margin: '0 auto',
    color: '#202123',
    '@media (min-width: 450px)': {
      padding: '2em'
    }
  }
}))

const Container = ({children}) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default Container
