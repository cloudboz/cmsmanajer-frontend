import React from "react";
import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Cookies from "js-cookie";

import { useAuthentication } from "hooks/auth";
import { setToken } from "utils/api";

import RegisterForm from "./components/RegisterForm";
import Snackbar from "components/Snackbar";
import { useRouter } from "next/router";

export default function Register() {
  const classes = useStyles();
  const router = useRouter();
  const { register } = useAuthentication();
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
      } = await register.mutateAsync(values);

      Cookies.set("token", data.accessToken, { expires: 30 });
      localStorage.setItem("token", data.accessToken);
      setToken(data.accessToken);

      router.push("/verify");
    } catch (error) {
      console.error(error.response);
      switch (error.response.status) {
        case 400:
          setMessage(error.response.data?.message);
          break;
        case 403:
          setMessage(
            "Your email address or phone number has already been used."
          );
          break;
        default:
          setMessage("Internal server error");
          break;
      }
      setOpen(true);
    }
  };

  return (
    <Grid container className={classes.container} direction="row-reverse">
      <Image
        alt="Abstract"
        src="/bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: 0 }}
      />
      <Grid item container md={5} sm className={classes.blue}>
        <Container maxWidth="xs" disableGutters style={{ padding: "5px" }}>
          <RegisterForm
            onSubmit={handleSubmit}
            isLoading={register.isLoading}
          />
          <Snackbar
            severity="error"
            message={message}
            open={open}
            handleClose={handleClose}
          />
        </Container>
      </Grid>
      <Hidden smDown>
        <Grid item container md sm={4} style={{ zIndex: 1 }}>
          <Container
            maxWidth="sm"
            style={{ paddingRight: "50px", marginBlock: "100px" }}
          >
            <Link variant="h5" className={classes.logo} href="/">
              CMS Manajer
            </Link>
            <Typography variant="h3" className={classes.bold} paragraph>
              A few clicks away from connecting your server
            </Typography>
            <Typography variant="h6" style={{ fontWeight: "normal" }}>
              Manage your servers in a simple way
            </Typography>
          </Container>
        </Grid>
      </Hidden>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundColor: "white",
  },
  image: {
    display: "block",
    position: "absolute",
    right: 0,
    height: "auto",
    width: "45vw",
    top: theme.spacing(13),
  },
  blue: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    zIndex: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  logo: {
    fontWeight: "bold",
    marginBottom: 32,
  },
}));
