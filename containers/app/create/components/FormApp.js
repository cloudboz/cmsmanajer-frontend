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

const data = [{ name: "server", label: "Server", placeholder: "My Server" }];

const schema = yup.object({
  name: yup.string(),
  type: yup.string().required(),
  server: yup.mixed().required(),
  systemUser: yup.object().shape({
    id: yup.string(),
    username: yup.string().required(),
    password: yup.string().min(4).required(),
  }),
});

export default function FormApp({ name, classes, servers, users }) {
  const initialValues = {
    name,
    type: name.toLowerCase(),
    server: servers[0],
    systemUser: users[0],
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
          <Typography>Test</Typography>
        </Grid>
        {/* {data.map((input, i) => (
            <Input
              name={input.name}
              label={input.label}
              className={classes.form}
              placeholder={input.placeholder}
              values={values}
              errors={errors}
              handleBlur={handleBlur}
              handleChange={handleChange}
              key={i}
            />
          ))} */}
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
