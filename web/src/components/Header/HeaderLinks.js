/*eslint-disable*/
import React, {useEffect, useState} from "react";
// react components for routing our app without refresh
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Facebook, Instagram, YouTube} from "@material-ui/icons";

// core components
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import {navigate} from "../../../.cache/gatsby-browser-entry";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [tooltipPlacement, setTooltipPlacement] = useState("top");

  useEffect(() => {
    setTooltipPlacement(window.innerWidth > 959 ? "top" : "left");
  }, []);

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={() => navigate("/archive")}
        >
          Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={() => navigate("/about")}
        >
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-youtube"
          title="Follow us on youtube"
          placement={tooltipPlacement}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.youtube.com/channel/UCm1ulSwIzrpDFiBKhRqJPZg?ref=twoexploringsouls"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <YouTube className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={tooltipPlacement}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/TwoExploringSouls?ref=twoexploringsouls"
            target="_blank"
            className={classes.navLink}
          >
            <Facebook className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={tooltipPlacement}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/twoexploringsouls/?ref=twoexploringsouls"
            target="_blank"
            className={classes.navLink}
          >
            <Instagram className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
