import { Box, Container, Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import * as yup from "yup";

import countries from "utils/country-list.json";
import { useRegister } from "hooks/auth";

import Form from "../components/Form";

export default function Register() {
  const classes = useStyles();
  const { mutateAsync: register, isLoading } = useRegister();

  const form = [
    { name: "name", placeholder: "e.g. Bambang" },
    { name: "email", placeholder: "e.g. mail@cmsmanajer.com" },
    { name: "password", placeholder: "********" },
    { name: "phone", placeholder: "+6281222222222", type: "phone" },
    {
      name: "country",
      label: "Country",
      placeholder: "e.g. Indonesia",
      type: "select",
      options: countries,
    },
    { name: "job", placeholder: "e.g. Programmer" },
  ];

  const text = {
    title: "Sign Up",
    subtitle: "Already have an account?",
    title2: "Login",
    button: "Create Account",
    route: "/login",
  };

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    phone: yup.string().required(),
    country: yup.string().required(),
    job: yup.string().required(),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    // try {
    //   const {
    //     data: { data },
    //   } = await register(values);

    //   Cookies.set("token", data.accessToken, { expires: 30 });
    //   localStorage.setItem("token", data.accessToken);

    //   router.push("/verify");
    // } catch (error) {
    //   console.error(error);
    // }
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
          <Form
            data={form}
            text={text}
            schema={schema}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Container>
      </Grid>
      <Hidden smDown>
        <Grid item container md sm={4} style={{ zIndex: 1 }}>
          <Container
            maxWidth="sm"
            style={{ paddingRight: "50px", marginBlock: "100px" }}
          >
            <Typography variant="h5" className={classes.logo}>
              CMS Manajer
            </Typography>
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
    marginBottom: theme.spacing(10),
  },
}));