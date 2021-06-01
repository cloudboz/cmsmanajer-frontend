import React from 'react';

import { AppBar, Container, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { StyledTabs, StyledTab } from './Tab'


export default function Navbar() {
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
      backgroundColor: '#2e1534',
    },
  }));

  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
    <AppBar>
      <Container>
          <StyledTabs value={1}>
            <StyledTab label="Workflows" />
            <StyledTab label="Datasets" />
            <StyledTab label="Connections" />
          </StyledTabs>
          
      </Container>
    </AppBar>
    </>
  )
}