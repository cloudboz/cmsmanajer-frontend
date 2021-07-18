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

export default function FormWeb({
  name,
  classes,
  server,
  stack,
  handleSubmit: handleSubmitForm,
}) {
  const [createUser, setCreateUser] = React.useState(false);
  const [sshKey, setSshKey] = React.useState(false);

  const { getSysUsersByServer } = useServer();

  const { data: users, isLoading } = getSysUsersByServer(server.id);
  const schema = yup.object({
    name: yup.string().required(),
    type: yup.string().required(),
    domain: yup.string().required(),
    createUser: yup.boolean().required(),
    systemUser: yup.object().shape({
      id: yup.string(),
      username: yup.string().required(),
      password: yup
        .string()
        .min(4)
        .when("createUser", (_, schema) => {
          return createUser && !sshKey
            ? schema.required()
            : schema.notRequired();
        }),
      sshKey: yup.string().when("createUser", (_, schema) => {
        return createUser && sshKey ? schema.required() : schema.notRequired();
      }),
    }),
  });

  const initialValues = {
    name,
    type: stack,
    domain: "",
    systemUser: {
      id: users?.[0].id,
      username: users?.[0].username,
      password: "",
      sshKey: users?.[0].sshKey?.name || "",
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

  const defaultProps = {
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
  };

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
            {...defaultProps}
          />

          <Input
            name="domain"
            label="Domain"
            className={classes.form}
            placeholder="e.g. sub.domain.com"
            {...defaultProps}
          />

          <FormUser
            {...defaultProps}
            classes={classes}
            options={users}
            setFieldValue={setFieldValue}
            createUser={createUser}
            setCreateUser={setCreateUser}
            sshKey={sshKey}
            setSshKey={setSshKey}
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
