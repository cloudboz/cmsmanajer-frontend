import React from "react";
import { Container, Typography, Button, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import obscureEmail from "utils/obscureEmail";
import { useAuthentication } from "hooks/auth";

import Snackbar from "components/Snackbar";

export default function VerifyEmail({ email, from, to }) {
  const classes = useStyles();
  const router = useRouter();
  const { resendVerification, resendForgot } = useAuthentication();
  const [timer, setTimer] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    if (timer != 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  const resend = from == "register" ? resendVerification : resendForgot;

  const handleResend = async () => {
    try {
      await resend.mutateAsync({ email });
      setTimer(5);
    } catch (error) {
      switch (error.response.status) {
        case 404:
          setMessage("You haven't registered to CMS Manajer");
          break;
        case 400:
          setMessage("Please wait 60 seconds before resending email.");
          break;
        default:
          setMessage("Internal server error");
          break;
      }
      setOpen(true);
    }
  };

  return (
    <Container className={classes.wrapper} disableGutters maxWidth={false}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title} align="center">
          Verify your email address
        </Typography>
        <img src="/email-sent1.svg" className={classes.image} />
        <Typography variant="body1" className={classes.body} align="center">
          We’ve sent an email to <b>{obscureEmail(email)}</b>. Please click on
          the link in your email {to}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          size="large"
          onClick={handleResend}
          disabled={timer != 0 || resend.isLoading}
        >
          {timer == 0 ? "Resend Email" : timer}
        </Button>
      </Container>
      <Snackbar
        severity="error"
        message={message}
        open={open}
        handleClose={handleClose}
      />
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
  },
  container: {
    display: "grid",
    justifyItems: "center",
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: 45,
  },
  body: {
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
    width: "11em",
  },
}));
