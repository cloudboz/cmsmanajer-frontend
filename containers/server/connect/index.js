import React from "react";
import { ListItem } from "@material-ui/core";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  List,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";

import Input from "../../../components/Input";

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

const requirements = [
  "Your server must be Ubuntu 18.04 or 20.04 (64-bit).",
  "Only clean servers (no Nginx, Apache, or MySQL installed) can be connected to CMS Manajer.",
  "Installed python2.7 or python3.",
  "Minimum of RAM 256MB.",
];

const data = [
  { name: "name", label: "Server Name", placeholder: "Example" },
  { name: "ip", label: "IP Address", placeholder: "104.21.59.111" },
  { name: "username", placeholder: "ubuntu" },
  { name: "password", placeholder: "********" },
];

const initialValues = {
  name: "",
  ip: "",
  username: "",
  password: "",
};

const schema = yup.object({
  name: yup.string().required(),
  ip: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function ConnectServer() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography variant="h4" paragraph>
        Connect Server
      </Typography>

      <Grid container spacing={8}>
        <Grid item sm={5}>
          <List>
            <ListItem
              className={classes.list}
              style={{ marginBottom: 5 }}
              divider
            >
              <ListItemText primary="Requirements" />
            </ListItem>
            {requirements.map((req, i) => (
              <ListItem key={i} className={classes.list} divider>
                <ListItemAvatar>
                  <Avatar>{i + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={req} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item sm>
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            initialValues={initialValues}
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
              <form noValidate onSubmit={handleSubmit} autoComplete="off">
                {data.map((input, i) => (
                  <Input
                    name={input.name}
                    label={input.label}
                    className={classes.form}
                    placeholder={input.placeholder}
                    values={values}
                    errors={errors}
                    touched={touched}
                    showPassword={showPassword}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                    key={i}
                  />
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ marginTop: "25px", marginBottom: "3px" }}
                  disabled={!dirty || !isValid}
                  onClick={submitForm}
                >
                  Connect
                </Button>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
}
