import React from "react";

import {
  AppBar,
  Container,
  Typography,
  Tab,
  Toolbar,
  Button,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { StyledTabs, StyledTab } from "./Tab";

export default function Navbar() {
  const useStyles = makeStyles((theme) => ({
    navbar: {
      padding: theme.spacing(2),
      background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    },
    toolbar: {
      margin: theme.spacing(0),
      paddingInline: theme.spacing(0),
    },
    grow: {
      flexGrow: 1,
    },
    primary: {
      marginLeft: theme.spacing(2),
      borderRadius: 25,
      paddingInline: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.navbar} elevation={0} position="fixed">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">CMS Manajer</Typography>
            <div className={classes.grow} />
            <StyledTab label="About" />
            <StyledTab label="Pricing" />
            <StyledTab label="Documentation" />
            <StyledTab label="Login" />
            <Button
              variant="contained"
              color="primary"
              className={classes.primary}
            >
              SIGN UP
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
