import React from "react";
import { ListItem } from "@material-ui/core";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  MenuItem,
  FormControlLabel,
  List,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Switch from "../../../../components/Switch";

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

const data = [
  { name: "systemUser.username", label: "Username", placeholder: "ubuntu" },
  { name: "systemUser.password", label: "Password", placeholder: "*****" },
];

export default function FormUser({
  values,
  options,
  errors,
  touched,
  handleBlur,
  handleChange,
  classes,
  setFieldValue,
}) {
  const [createUser, setCreateUser] = React.useState(false);
  const handleCreateUser = async () => {
    setCreateUser(!createUser);
  };

  const emptyValues = {
    systemUser: {
      id: "",
      username: "",
      password: "",
    },
  };

  React.useEffect(() => {
    if (!createUser) setFieldValue("systemUser", options[0]);
    else setFieldValue("systemUser", emptyValues.systemUser);
  }, [createUser]);

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={createUser}
            onChange={handleCreateUser}
            name="createUser"
          />
        }
        label="Create new system user"
      />
      {createUser ? (
        <>
          {data.map((input, i) => (
            <Input
              name={input.name}
              label={input.label}
              className={classes.form}
              placeholder={input.placeholder}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              key={i}
            />
          ))}
        </>
      ) : (
        <Select
          name="systemUser"
          label="System User"
          placeholder="ubuntu"
          options={options}
          renderOption="username"
          className={classes.form}
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      )}
    </>
  );
}
