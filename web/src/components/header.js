import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {makeStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import MenuIcon from '@material-ui/icons/Menu'
import YouTubeIcon from '@material-ui/icons/YouTube'
import {navigate} from 'gatsby-link'
import React, {useState} from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  appBarTransparent: {
    color: 'white',
    backgroundColor: 'transparent'
  },
  appBarSolid: {
    color: 'black',
    backgroundColor: 'white'
  }
}))

const siteLinks = [
  {
    title: 'Blog',
    url: '/archive'
  },
  {
    title: 'About',
    url: '/about'
  }
]

const socialLinks = [
  {
    title: 'Youtube',
    tooltip: 'Follow us on youtube',
    url: 'https://www.youtube.com/channel/UCm1ulSwIzrpDFiBKhRqJPZg?ref=twoexploringsouls',
    icon: <YouTubeIcon />
  },
  {
    title: 'Facebook',
    tooltip: 'Follow us on facebook',
    url: 'https://www.facebook.com/TwoExploringSouls?ref=twoexploringsouls',
    icon: <FacebookIcon />
  },
  {
    title: 'Instagram',
    tooltip: 'Follow us on instagram',
    url: 'https://www.instagram.com/twoexploringsouls/?ref=twoexploringsouls',
    icon: <InstagramIcon />
  }
]

const Header = ({title}) => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [appBarClass, setAppBarClass] = useState(classes.appBarTransparent)

  React.useEffect(() => {
    const handleScroll = () => {
      const windowsScrollTop = window.pageYOffset
      if (windowsScrollTop > 400) {
        setAppBarClass(classes.appBarSolid)
      } else {
        setAppBarClass(classes.appBarTransparent)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return function cleanup () {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={appBarClass} elevation={0}>
        <Toolbar>
          <Typography variant='h6' className={classes.title} onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            {title}
          </Typography>
          <Hidden smDown>
            {siteLinks.map((lnk, idx) => (
              <Button key={idx} color='inherit' onClick={() => navigate(lnk.url)}>{lnk.title}</Button>
            ))}
            {socialLinks.map((lnk, idx) => (
              <Tooltip key={idx} title={lnk.tooltip} aria-label={lnk.title}>
                <IconButton
                  color='inherit'
                  href={lnk.url}
                  target='_blank'
                >
                  {lnk.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Hidden>
          <Hidden smUp implementation='css'>
            <IconButton edge='start' color='inherit' aria-label='menu' onClick={() => setDrawerOpen(!drawerOpen)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='right' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List>
                {siteLinks.map((lnk, idx) => (
                  <ListItem key={idx} button onClick={() => navigate(lnk.url)}>
                    <ListItemText primary={lnk.title} />
                  </ListItem>
                ))}
                <Divider />
                {socialLinks.map((lnk, idx) => (
                  <ListItem
                    key={idx}
                    button
                    component='a'
                    href={lnk.url}
                    target='_blank'
                  >
                    <ListItemIcon>{lnk.icon}</ListItemIcon>
                    <ListItemText primary={lnk.title} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
