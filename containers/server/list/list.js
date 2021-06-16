import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import ListHeader from "../../../components/ListHeader";

import ListItem from "../../../components/ListItem";

const useStyles = makeStyles((theme) => ({
  center: {
    justifyItems: "center",
  },
  empty: {},
  btn: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
  },
}));

export default function Server() {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.center}>
      <ListHeader />
      <ListItem />
    </Container>
  );
}
