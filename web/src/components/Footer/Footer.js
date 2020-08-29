/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";
import {Link} from "gatsby";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to="/about">About us</Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to="/archive">Blog</Link>
            </ListItem>
          </List>
        </div>
        <div className={`${classes.right} ${classes.block}`}>
          &copy; {1900 + new Date().getYear()} , Two Exploring Souls
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};