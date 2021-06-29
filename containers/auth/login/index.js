import { Container, Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import * as yup from "yup";

import Form from "../components/Form";
import { useLogin } from "hooks/auth";

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const { mutateAsync: login, isLoading } = useLogin();

  const form = [
    { name: "email", placeholder: "mail@cmsmanajer.com" },
    { name: "password", placeholder: "********" },
  ];

  const text = {
    title: "Sign In",
    subtitle: "Don't have an account?",
    title2: "Register",
    button: "Login",
    route: "/register",
  };

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const handleSubmit = async (values) => {
    try {
      const {
        data: { data },
      } = await login(values);

      Cookies.set("token", data.accessToken, { expires: 30 });
      localStorage.setItem("token", data.accessToken);

      router.push("/servers");
    } catch (error) {
      console.error(error);
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
        <Typography variant="h5" className={classes.logo} align="center">
          CMS Manajer
        </Typography>
        <Form
          data={form}
          text={text}
          schema={schema}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
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
