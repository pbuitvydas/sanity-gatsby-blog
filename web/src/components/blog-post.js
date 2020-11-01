import {Divider, Grid} from '@material-ui/core'
import blueGrey from '@material-ui/core/colors/blueGrey'
import {makeStyles} from '@material-ui/core/styles'
import {differenceInDays, distanceInWords, format} from 'date-fns'
import React from 'react'

import LayoutContainer from '../containers/layout'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import AuthorList from './author-list'
import Container from './container'
import PortableText from './portableText'

const useStyles = makeStyles((theme) => ({
  publishedAt: {
    margin: '2rem 0 3rem',
    color: blueGrey[400]
  }
}))

function BlogPost (props) {
  const classes = useStyles()
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  return (
    <LayoutContainer mainImageSmall mainImageUrl={imageUrlFor(buildImageObj(mainImage))
      .width(1200)
      .height(Math.floor((9 / 16) * 1200))
      .fit('crop')
      .auto('format')
      .url()}>
      <Container>
        <Grid container spacing={4}>
          <Grid item sm={12} md={8}>
            <div>
              <h1>{title}</h1>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </div>
          </Grid>
          <Grid item sm={12} md={4}>
            <aside>
              {publishedAt && (
                <div className={classes.publishedAt}>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM Do, YYYY')}
                </div>
              )}
              <Divider />
              {authors && <AuthorList items={authors} title='Authors' />}
              <Divider />
              {categories && (
                <div>
                  <h3>Categories</h3>
                  <ul>
                    {categories.map(category => (
                      <li key={category._id}>{category.title}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </Grid>
        </Grid>
      </Container>
    </LayoutContainer>
  )
}

export default BlogPost
