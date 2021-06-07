import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";

import { Input, PasswordInput } from "./input";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  country: yup.string().required(),
  job: yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    // width: "70%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: theme.spacing(4),
    borderRadius: "10px",
  },
  bold: {
    fontWeight: "bold",
  },
  form: {
    marginBlock: "3px",
  },
}));

export default function Form() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography variant="h4" className={classes.bold}>
        Sign Up
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Already have an account? <strong>Login</strong>
      </Typography>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        initialValues={{
          name: "",
          email: "",
          password: "",
          country: "",
          job: "",
        }}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
          isValid,
          dirty,
          submitForm,
        }) => (
          <form
            className={classes.root}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Input
              name="name"
              className={classes.form}
              placeholder="Bambang"
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Input
              name="email"
              className={classes.form}
              placeholder="user@cmsmanajer.com"
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <PasswordInput
              name="password"
              className={classes.form}
              placeholder="********"
              values={values}
              errors={errors}
              touched={touched}
              showPassword={showPassword}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />
            <Input
              name="country"
              className={classes.form}
              placeholder="Indonesia"
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Input
              name="job"
              className={classes.form}
              placeholder="Programmer"
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              style={{ marginTop: "25px", marginBottom: "3px" }}
              disabled={!dirty || !isValid}
              onClick={submitForm}
            >
              Create Account
            </Button>
            <Typography variant="caption" align="center" display="block">
              By signing up, you agree to the <strong>Terms of Service</strong>
            </Typography>
          </form>
        )}
      </Formik>
    </Container>
  );
}
