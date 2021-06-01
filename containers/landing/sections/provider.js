import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "block",
    position: "absolute",
    right: 0,
    height: "auto",
    width: "45vw",
    top: theme.spacing(13),
  },
  background: {
    backgroundColor: theme.palette.common.gray,
    height: "30vh",
  },
  container: {
    height: "100%",
  },
  grid: {
    height: "100%",
    alignItems: "center",
    color: "white",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  subtitle: {
    lineHeight: "1.8",
    paddingRight: theme.spacing(10),
    fontWeight: "normal",
    marginBottom: theme.spacing(5),
  },
  primary: {
    fontSize: 20,
    fontWeight: "medium",
    borderRadius: 50,
    paddingInline: theme.spacing(6),
    paddingBlock: theme.spacing(2),
  },
}));

export default function Provider() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.background}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography>A</Typography>
      </Container>
    </Container>
  );
}
