import React from "react";
import { Container, Typography, Button, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function EmailVerified() {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => router.push("/login");

  return (
    <Container className={classes.wrapper} disableGutters maxWidth={false}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title} align="center">
          Verification Failed
        </Typography>
        <img src="/token-invalid.svg" className={classes.image} />
        <Typography variant="body1" className={classes.content} align="center">
          Your verification token is invalid, we cannot process your request.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          size="large"
          onClick={handleClick}
        >
          Login
        </Button>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    display: "grid",
    // backgroundImage: `url(${bg})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  container: {
    display: "grid",
    justifyItems: "center",
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: 45,
  },
  content: {
    // fontWeight: theme.typography.fontWeightMedium,
    marginBottom: 30,
    width: 750,
  },
  image: {
    display: "block",
    height: 250,
    marginBottom: 30,
  },
  btn: {
    borderRadius: 30,
    paddingInline: 25,
  },
}));
