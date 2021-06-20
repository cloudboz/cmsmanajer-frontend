import React from "react";
import { ListItem } from "@material-ui/core";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  FormControlLabel,
} from "@material-ui/core";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Switch from "../../../../components/Switch";
import FormUser from "./FormUser";

const useStyles = makeStyles((theme) => ({
  center: {
    justifyItems: "center",
    display: "grid",
  },
  empty: {},
  btn: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
  },
  list: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  form: {
    marginBlock: "3px",
  },
}));

const wordpress = [
  { name: "wordpress.title", label: "Title", placeholder: "My WordPress Blog" },
  { name: "wordpress.username", label: "Username", placeholder: "admin" },
  { name: "wordpress.password", label: "Password", placeholder: "*****" },
  { name: "wordpress.email", label: "email", placeholder: "admin@gmail.com" },
];

const schema = yup.object({
  server: yup.mixed().required(),
  systemUser: yup.object().shape({
    id: yup.string(),
    username: yup.string().required(),
    password: yup.string().min(4).required(),
  }),
  wordpress: yup.object().shape({
    title: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
  }),
});

export default function FormWP({ name, classes, servers, users }) {
  const initialValues = {
    name: "",
    domain: "",
    server: servers[0],
    systemUser: users[0],
    wordpress: {
      title: "",
      username: "",
      password: "",
      email: "",
    },
  };

  const handleSubmitForm = async (values) => {
    console.log(values);
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    dirty,
    submitForm,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
    validationSchema: schema,
  });

  return (
    <form noValidate onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Input
            name="name"
            label="Name"
            className={classes.form}
            placeholder="My App"
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <Select
            name="server"
            label="Server"
            className={classes.form}
            placeholder="Choose server..."
            values={values.server}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            options={servers}
            renderOption="name"
          />
          <Input
            name="domain"
            label="Domain"
            className={classes.form}
            placeholder="sub.domain.com"
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />

          <FormUser
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            classes={classes}
            options={users}
            setFieldValue={setFieldValue}
          />
        </Grid>
        <Grid item sm={6}>
          {wordpress.map((wp, i) => (
            <Input
              name={wp.name}
              label={wp.label}
              className={classes.form}
              placeholder={wp.placeholder}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              key={i}
            />
          ))}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginTop: "25px", marginBottom: "3px" }}
        disabled={!isValid}
        onClick={submitForm}
      >
        Create
      </Button>
    </form>
  );
}
