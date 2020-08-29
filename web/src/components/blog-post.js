import {differenceInDays, distanceInWords, format} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'
import {makeStyles} from "@material-ui/core/styles";
import styles from "../assets/jss/material-kit-react/views/landingPage";
import styles2 from './blog-post.module.css'
import LayoutContainer from "../containers/layout";

const useStyles = makeStyles(styles);

const dashboardRoutes = [];

function BlogPost (props) {
  const classes = useStyles();
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  return (
    <LayoutContainer mainImageSmall mainImageUrl={imageUrlFor(buildImageObj(mainImage))
      .width(1200)
      .height(Math.floor((9 / 16) * 1200))
      .fit('crop')
      .auto('format')
      .url()}>
      <Container>
        <div className={`${styles2.grid} ${styles2.root}`}>
          <div className={styles2.mainContent}>
            <h1 className={styles2.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody}/>}
          </div>
          <aside className={styles2.metaContent}>
            {publishedAt && (
              <div className={styles2.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors'/>}
            {categories && (
              <div className={styles2.categories}>
                <h3 className={styles2.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </LayoutContainer>
  )
}

export default BlogPost
