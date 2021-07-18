import React from "react";
import {
  makeStyles,
  FormControlLabel,
  Typography,
  Checkbox,
} from "@material-ui/core";

import Input from "components/Input";
import Select from "components/Select";
import Switch from "components/Switch";

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
  createUser,
  setCreateUser,
  sshKey,
  setSshKey,
}) {
  const handleCreateUser = async () => {
    setCreateUser(!createUser);
  };

  const defaultProps = {
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
  };

  const emptyValues = {
    systemUser: {
      id: "",
      username: "",
      password: "",
      sshKey: "",
    },
  };

  React.useEffect(async () => {
    if (createUser) {
      await setFieldValue("systemUser", emptyValues.systemUser);
      setFieldValue("createUser", createUser);
    } else {
      await setFieldValue("systemUser", {
        id: options[0].id,
        username: options[0].username,
        password: "",
        sshKey: options[0].sshKey?.name || "",
      });
      setFieldValue("createUser", createUser);
    }
  }, [createUser]);

  React.useEffect(() => {
    setFieldValue("systemUser.password", "");
    setFieldValue("systemUser.sshKey", "");
  }, [sshKey]);

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
          <Input
            name="systemUser.username"
            label="Username"
            placeholder="e.g. ubuntu"
            {...defaultProps}
          />
          <FormControlLabel
            label={<Typography variant="subtitle1">Use SSH Key</Typography>}
            control={
              <Checkbox
                checked={sshKey}
                onChange={() => setSshKey(!sshKey)}
                color="secondary"
              />
            }
          />
          {!sshKey && (
            <Input
              name="systemUser.password"
              label="Password"
              placeholder="e.g. *********"
              {...defaultProps}
            />
          )}
          {sshKey && (
            <Input
              name="systemUser.sshKey"
              label="Private Key"
              placeholder={`e.g. -----BEGIN RSA PRIVATE KEY-----
L8AsOpF9j2OvMPppF2ZvGIw2mJZp6EIFUoOzSUv9G5zZ90rTVtvu0Fi
...
-----END RSA PRIVATE KEY-----`}
              multiline
              rows={5}
              {...defaultProps}
            />
          )}
        </>
      ) : (
        <Select
          name="systemUser"
          label="System User"
          placeholder="ubuntu"
          options={options}
          renderOption="username"
          className={classes.form}
          values={values.systemUser}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={(e) => {
            const { id, username, sshKey = {} } = e.target.value;

            setFieldValue("systemUser", {
              id,
              username,
              password: "",
              sshKey: sshKey.name,
            });
          }}
        />
      )}
    </>
  );
}
