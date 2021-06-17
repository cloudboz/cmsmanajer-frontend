import { Container, makeStyles, Typography } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography>
          Copyright 2021 - CADABRA Indonesia. All rights reserved.
        </Typography>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.primary.dark,
  },
  container: {
    paddingBlock: theme.spacing(2),
    color: "white",
  },
}));
