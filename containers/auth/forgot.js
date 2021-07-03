import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import * as yup from "yup";

import Form from "./components/Form";
import Snackbar from "components/Snackbar";
import ForgotForm from "./components/ForgotForm";
import { setToken } from "utils/api";
import { useAuthentication } from "hooks/auth";

export default function BeginForgot() {
  const classes = useStyles();
  const router = useRouter();
  const { beginForgot } = useAuthentication();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      const {
        data: { data },
      } = await beginForgot.mutateAsync(values);

      Cookies.set("email", values.email, { expires: 1 });
      localStorage.setItem("email", values.email);

      router.push("/reset-password/sent");
    } catch (error) {
      console.error(error.response);
      switch (error.response?.status) {
        case 404:
          setMessage("You haven't registered to CMS Manajer");
          break;
        case 400:
          setMessage("The email or password is incorrect. Please try again.");
          break;
        default:
          setMessage("Internal server error");
          break;
      }
      setOpen(true);
    }
  };

  return (
    <Container className={classes.container} disableGutters maxWidth={false}>
      <Image
        alt="Abstract"
        src="/bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: 0 }}
      />
      <Container style={{ zIndex: 1 }}>
        <Typography
          variant="h5"
          className={classes.logo}
          align="center"
          onClick={() => router.push("/")}
        >
          CMS Manajer
        </Typography>
        <ForgotForm onSubmit={handleSubmit} isLoading={beginForgot.isLoading} />
        <Snackbar
          severity="error"
          message={message}
          open={open}
          handleClose={handleClose}
        />
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(45deg, #031C29 0%, #072A3C 100%)",
    height: "100vh",
    // backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
  },
  logo: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
}));
