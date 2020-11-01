import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'gatsby'
import React from 'react'

import BlogPostPreviewGrid from './blog-post-preview-grid'

const useStyles = makeStyles((theme) => ({
  browseMoreNav: {
    paddingTop: 20,
    textAlign: 'center'
  }
}))

function BlogPostPreviewList (props) {
  const classes = useStyles()
  return (
    <div>
      {props.title && <h1>{props.title}</h1>}
      {props.nodes && props.nodes.length > 0 && <BlogPostPreviewGrid nodes={props.nodes} />}
      {props.browseMoreHref && (
        <div className={classes.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewList
