import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import * as yup from "yup";

import Form from "./components/Form";
import Snackbar from "components/Snackbar";
import LoginForm from "./components/LoginForm";
import { useAuthentication } from "hooks/auth";
import { setToken } from "utils/api";

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const { login } = useAuthentication();
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
      } = await login.mutateAsync(values);

      Cookies.set("token", data.accessToken, { expires: 30 });
      localStorage.setItem("token", data.accessToken);
      setToken(data.accessToken);

      router.push("/servers");
    } catch (error) {
      console.error(error.response);
      switch (error.response.status) {
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
        <LoginForm onSubmit={handleSubmit} isLoading={login.isLoading} />
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
    height: "100vh",
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    // backgroundImage: `url(${bg})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  logo: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
}));
