import React from "react";
import { Grid, Button, makeStyles, FormControlLabel } from "@material-ui/core";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

import Input from "components/Input";
import Select from "components/Select";
import FormUser from "./FormUser";
import useServer from "hooks/server";

const wordpress = [
  {
    name: "wordpress.title",
    label: "Title",
    placeholder: "e.g. My WordPress Blog",
  },
  { name: "wordpress.username", label: "Username", placeholder: "e.g. admin" },
  { name: "wordpress.password", label: "Password", placeholder: "*****" },
  {
    name: "wordpress.email",
    label: "Email",
    placeholder: "e.g. admin@gmail.com",
  },
];

const schema = yup.object({
  name: yup.string().required(),
  domain: yup.string().required(),
  server: yup.mixed().required(),
  type: yup.string().required(),
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
  createUser: yup.boolean().required(),
});

export default function FormWP({
  name,
  classes,
  servers,
  handleSubmit: handleSubmitForm,
}) {
  const [server, setServer] = React.useState(servers[0]);
  const { getSysUsersByServer } = useServer();

  const { data: users, isLoading } = getSysUsersByServer(server.id);

  const initialValues = {
    name: "",
    domain: "",
    type: "wordpress",
    server,
    systemUser: {
      id: users?.[0].id,
      username: users?.[0].username,
      password: "nulll",
    },
    wordpress: {
      title: "",
      username: "",
      password: "",
      email: "",
    },
    createUser: false,
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

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <form noValidate onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Input
            name="name"
            label="Name"
            className={classes.form}
            placeholder="e.g. My App"
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
            handleChange={(e) => {
              setFieldValue("server", e.target.value);
              setServer(e.target.value);
            }}
            options={servers}
            renderOption="name"
          />
          <Input
            name="domain"
            label="Domain"
            className={classes.form}
            placeholder="e.g. sub.domain.com"
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
