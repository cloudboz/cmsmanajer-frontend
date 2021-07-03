import React from "react";
import clsx from "clsx";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Checkbox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";

import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

import Layout from "components/Layout";
import Input from "components/Input";
import Modal from "components/Modal";
import useServer from "hooks/server";

const requirements = [
  "Your server must be Ubuntu 18.04 or 20.04 (64-bit).",
  "Only clean servers (no Nginx, Apache, or MySQL installed) can be connected to CMS Manajer.",
  "Installed python2.7 or python3.",
  "Minimum of RAM 256MB.",
];

const data = [
  { name: "name", label: "Server Name", placeholder: "Example" },
  { name: "ip", label: "IP Address", placeholder: "104.21.59.111" },
  { name: "systemUser.username", label: "Username", placeholder: "ubuntu" },
  { name: "systemUser.password", label: "Password", placeholder: "********" },
];

const initialValues = {
  name: "",
  ip: "",
  webServer: "nginx",
  systemUser: {
    username: "",
    password: "",
  },
};

const schema = yup.object({
  name: yup.string().required(),
  ip: yup
    .string()
    .required()
    .matches(
      /^(((\d+)(\.(?!$))){3}(\d+)(\n(?!$)|$))*$/,
      "Please provide a valid IP"
    ),
  webServer: yup.string().notRequired(),
  systemUser: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(4).required(),
  }),
});

export default function ConnectServer() {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [multiple, setMultiple] = React.useState(false);
  const { connectServer: connect } = useServer();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitForm = async (values) => {
    console.log(values);
    await connect.mutateAsync(values);
    router.push("/servers");
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
    validationSchema: schema,
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
    initialValues,
  });

  const defaultProps = {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
  };

  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h4" paragraph>
            Connect Server
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item sm={5}>
          <Paper variant="outlined" className={classes.paper}>
            <List style={{ padding: 0 }}>
              <ListItem
                className={classes.list}
                style={{ marginBottom: 15 }}
                divider
              >
                <ListItemText
                  primary={
                    <Typography className={classes.bold}>
                      Requirements
                    </Typography>
                  }
                />
              </ListItem>
              {requirements.map((req, i) => (
                <ListItem
                  key={i}
                  className={classes.list}
                  alignItems="flex-start"
                  style={{ marginTop: 5 }}
                >
                  <ListItemAvatar className={classes.avatar}>
                    <CheckCircleOutlineRoundedIcon color="secondary" />
                  </ListItemAvatar>
                  <ListItemText className={classes.list} primary={req} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper variant="outlined" className={classes.paper}>
            <form noValidate onSubmit={handleSubmit} autoComplete="off">
              <Typography variant="subtitle2">I’d prefer to use</Typography>
              <Box className={classes.stackWrapper}>
                <Stack
                  name="Nginx"
                  value="nginx"
                  icon={<img src="/nginx.svg" className={classes.icon} />}
                  values={values}
                  setFieldValue={setFieldValue}
                />
                <Stack
                  name="Apache"
                  value="apache"
                  icon={<img src="/apache.svg" className={classes.icon} />}
                  values={values}
                  setFieldValue={setFieldValue}
                />
                <Stack
                  name="I'll choose later"
                  value={null}
                  icon={
                    <WatchLaterRoundedIcon
                      color="primary"
                      style={{ fontSize: 32 }}
                    />
                  }
                  values={values}
                  setFieldValue={setFieldValue}
                />
              </Box>
              {data.map((input, i) => {
                switch (input.name) {
                  case "ip":
                    return (
                      <Box key={i}>
                        <FormControlLabel
                          label={
                            <Typography variant="subtitle1">
                              Add multiple server
                            </Typography>
                          }
                          control={
                            <Checkbox
                              checked={multiple}
                              onChange={() => setMultiple(!multiple)}
                              color="secondary"
                            />
                          }
                        />
                        {multiple && (
                          <Alert severity="warning">
                            <Typography variant="subtitle2">
                              Username and password must be same
                            </Typography>
                          </Alert>
                        )}
                        <Input
                          name={input.name}
                          label={input.label}
                          multiline={multiple}
                          className={classes.form}
                          placeholder={
                            multiple
                              ? `e.g. 104.21.59.111
104.21.59.112`
                              : input.placeholder
                          }
                          rows={2}
                          key={i}
                          {...defaultProps}
                        />
                      </Box>
                    );

                  default:
                    return (
                      <Input
                        name={input.name}
                        label={input.label}
                        className={classes.form}
                        placeholder={input.placeholder}
                        key={i}
                        {...defaultProps}
                      />
                    );
                }
              })}
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginTop: "25px", marginBottom: "3px" }}
                disabled={!dirty || !isValid || connect.isLoading}
                type="submit"
              >
                Connect
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Modal size="xs" open={open} handleClose={handleClose}></Modal>
    </Layout>
  );
}

function Stack({ name, value, values, icon, setFieldValue }) {
  const classes = useStyles();
  const active = values.webServer == value;

  return (
    <Paper
      elevation={0}
      className={clsx(classes.stack, active && classes.active)}
      onClick={() => setFieldValue("webServer", value)}
    >
      {active && (
        <CheckCircleIcon color="secondary" className={classes.check} />
      )}
      {icon}
      <Typography>{name}</Typography>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    marginBottom: 30,
  },
  center: {
    justifyItems: "center",
    display: "grid",
  },
  bold: {
    fontWeight: 600,
  },
  btn: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
  },
  list: {
    padding: 0,
    margin: 0,
  },
  form: {
    marginBlock: "3px",
  },
  paper: {
    padding: 30,
  },
  stackWrapper: {
    display: "flex",
    // direction: "row",
    // gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 10,
    marginBottom: 15,
    width: "100%",
    // height: 60,
  },
  stack: {
    paddingInline: 20,
    paddingBlock: 10,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    columnGap: 10,
    height: 60,
    minWidth: 150,
    backgroundColor: "#FDFDFD",
    boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.23)`,
    cursor: "pointer",
    borderRadius: 5,
    position: "relative",
    "&:hover": {
      boxShadow: `inset 0 0 0 1px ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.common.white,
    },
  },
  active: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.secondary.main}`,
    "&:hover": {
      boxShadow: `inset 0 0 0 2px ${theme.palette.secondary.main}`,
    },
  },
  check: {
    position: "absolute",
    // float: "right",
    right: 5,
    top: 5,
    fontSize: 14,
  },
  icon: {
    display: "block",
    height: 30,
  },
  avatar: {
    textAlign: "center",
    margin: 0,
  },
}));
