import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'gatsby'
import React from 'react'

import BlogPostPreview from './blog-post-preview'

const useStyles = makeStyles((theme) => ({
  browseMoreNav: {
    paddingTop: 20,
    textAlign: 'center'
  }
}))

function BlogPostPreviewGrid (props) {
  const classes = useStyles()
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <Grid container spacing={4}>
        {props.nodes &&
        props.nodes.map(node => (
          <Grid item sm={12} md={4}>
            <BlogPostPreview {...node} />
          </Grid>
        ))}
      </Grid>
      {props.browseMoreHref && (
        <div className={classes.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
