import {Avatar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'

import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: ' 2rem 0 3rem'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  listItem: {
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  },
  avatar: {
    paddingRight: 5
  }
}))

function AuthorList ({items, title}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h3>{title}</h3>
      <ul className={classes.list}>
        {items.map(({author, _key}) => {
          const authorName = author && author.name
          return (
            <li key={_key} className={classes.listItem}>
              <div>
                <div className={classes.avatar}>
                  {author && author.image && author.image.asset && (
                    <Avatar
                      alt={authorName}
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()
                      }
                    />
                  )}
                </div>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AuthorList
