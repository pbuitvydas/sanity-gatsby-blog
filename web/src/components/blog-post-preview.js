import {format} from 'date-fns'
import React from 'react'
import {buildImageObj, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {navigate} from "../../.cache/gatsby-browser-entry";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function BlogPostPreview (props) {
  const classes = useStyles();
  let excerpt;
  if (props._rawExcerpt && props._rawExcerpt[0].children) {
    excerpt = props._rawExcerpt[0].children[0].text;
  }

  return (
    <Card className={classes.root} raised>
      <CardActionArea onClick={() => navigate(getBlogUrl(props.publishedAt, props.slug.current))}>
        <CardMedia
          className={classes.media}
          image={imageUrlFor(buildImageObj(props.mainImage))
            .width(600)
            .height(Math.floor((9 / 16) * 600))
            .auto('format')
            .url()}
          title={props.mainImage.alt}
        />
        <CardContent>
          <Typography variant="caption" display="block" gutterBottom>
            {format(props.publishedAt, 'MMMM Do, YYYY')}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate(getBlogUrl(props.publishedAt, props.slug.current))}>
          Read Post
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogPostPreview
