import React from "react";

import {
  AppBar,
  Container,
  Typography,
  Tab,
  Toolbar,
  Button,
  Hidden,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import { StyledTabs, StyledTab } from "./Tab";
import Drawer from "./Drawer";

export default function Navbar() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <AppBar className={classes.navbar} elevation={0} position="fixed">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">CMS Manajer</Typography>
            <div className={classes.grow} />
            <Hidden smDown>
              <StyledTab label="About" />
              <StyledTab label="Pricing" />
              <StyledTab label="Documentation" />
              <StyledTab label="Login" onClick={() => router.push("/login")} />
              <Button
                variant="contained"
                color="primary"
                className={classes.primary}
                onClick={() => router.push("/register")}
              >
                SIGN UP
              </Button>
            </Hidden>
            <Hidden mdUp>
              <Drawer />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

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
