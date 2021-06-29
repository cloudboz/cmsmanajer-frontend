import React from "react";
import { Container, Typography, Button, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function VerifyEmail({ user }) {
  const classes = useStyles();
  const router = useRouter();

  const obscure = (string) =>
    string[0] + string.substring(1).replace(/./gi, "*");

  const obscureEmail = (email) => {
    const split = email.split("@");
    const split2 = split[1].split(".");
    const obscured =
      obscure(split[0]) + "@" + obscure(split2[0]) + "." + obscure(split2[1]);
    return obscured;
  };

  return (
    <Container className={classes.wrapper} disableGutters maxWidth={false}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title} align="center">
          Verify your email address
        </Typography>
        <img src="/email-sent1.svg" className={classes.image} />
        <Typography variant="body1" className={classes.content} align="center">
          We’ve sent a verification email to <b>{obscureEmail(user.email)}</b>.
          Please click on the link in your email to finish the registration
          process
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          size="large"
        >
          Resend Email
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
