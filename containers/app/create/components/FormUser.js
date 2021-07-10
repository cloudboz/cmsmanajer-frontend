import React from "react";
import { makeStyles, FormControlLabel } from "@material-ui/core";

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
}) {
  const [createUser, setCreateUser] = React.useState(values.createUser);

  const handleCreateUser = async () => {
    setCreateUser(!createUser);
  };

  const emptyValues = {
    systemUser: {
      id: "",
      username: "",
      password: "",
      sshKeyId: "",
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
        password: "null",
      });
      setFieldValue("createUser", createUser);
    }
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
              required
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
          values={values.systemUser}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={(e) => {
            const { id, username, sshKey = {} } = e.target.value;
            setFieldValue("systemUser", {
              id,
              username,
              password: "null",
              sshKey: sshKey.name,
            });
          }}
        />
      )}
    </>
  );
}
