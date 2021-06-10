import React from "react";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Hidden,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { StyledTabs, StyledTab } from "./Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
  bar: {
    // height: "60px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar elevation={0} className={classes.bar}>
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" style={{ marginRight: "60px" }}>
              CMS Manajer
            </Typography>
            <Hidden xsDown>
              <StyledTabs value={value} onChange={handleChange}>
                <StyledTab label="Servers" />
                <StyledTab label="Apps" />
                <StyledTab label="Support" />
              </StyledTabs>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
