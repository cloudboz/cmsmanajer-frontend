import React from "react";
import {
  Typography,
  Grid,
  Button,
  makeStyles,
  FormControlLabel,
} from "@material-ui/core";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

import Input from "components/Input";
import Select from "components/Select";
import FormUser from "./FormUser";
import useServer from "hooks/server";

const schema = yup.object({
  name: yup.string().required(),
  type: yup.string().required(),
  domain: yup.string().required(),
  systemUser: yup.object().shape({
    id: yup.string(),
    username: yup.string().required(),
    password: yup.string().min(4).required(),
    sshKey: yup.string(),
  }),
  createUser: yup.boolean().required(),
});

export default function FormWeb({
  name,
  classes,
  server,
  stack,
  handleSubmit: handleSubmitForm,
}) {
  const { getSysUsersByServer } = useServer();

  const { data: users, isLoading } = getSysUsersByServer(server.id);

  const initialValues = {
    name,
    type: stack,
    domain: "",

    systemUser: {
      id: users?.[0].id,
      username: users?.[0].username,
      password: "nulll",
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

  React.useEffect(() => {
    setFieldValue("name", name);
    setFieldValue("type", stack);
  }, [name]);

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
            placeholder="e.g. My Web"
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
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
        <Grid item sm={6}></Grid>
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
