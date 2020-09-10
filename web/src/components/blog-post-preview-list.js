import {Link} from 'gatsby'
import React from 'react'

import BlogPostPreviewGrid from './blog-post-preview-grid'
import styles from './blog-post-preview-list.module.css'
import responsiveTitle1 from './typography.module.css'

function BlogPostPreviewList (props) {
  return (
    <div className={styles.root}>
      {props.title && <h1 className={responsiveTitle1}>{props.title}</h1>}
      {props.nodes && props.nodes.length > 0 && <BlogPostPreviewGrid nodes={props.nodes} />}
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
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
