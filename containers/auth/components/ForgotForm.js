import React from "react";
import clsx from "clsx";
import {
  Container,
  makeStyles,
  Typography,
  Button,
  Link,
} from "@material-ui/core";

import { useFormik } from "formik";
import { useRouter } from "next/router";

import * as yup from "yup";

import Input from "./Input";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

export default function LoginForm({ onSubmit, isLoading }) {
  const classes = useStyles();

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    dirty,
  } = useFormik({
    validationSchema: schema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    initialValues: {
      email: "",
    },
  });

  const defaultProps = {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
  };

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography variant="h4" className={classes.bold}>
        Forgot your password?
      </Typography>
      <Typography variant="subtitle1" paragraph>
        We'll email you instructions on how to reset your password.
      </Typography>

      <form
        className={classes.root}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Input
          name="email"
          placeholder="e.g. mail@cmsmanajer.com"
          {...defaultProps}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          style={{ marginTop: "25px", marginBottom: "3px" }}
          disabled={!dirty || !isValid || isLoading}
        >
          Send me instructions
        </Button>
      </form>
    </Container>
  );
}

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
  link: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
