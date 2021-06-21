import { Container, Typography, makeStyles } from "@material-ui/core";
import * as yup from "yup";
import Form from "../components/Form";
import Image from "next/image";

export default function Login() {
  const classes = useStyles();

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

  const handleSubmit = (values) => {
    console.log("login");
    console.log(values);
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
