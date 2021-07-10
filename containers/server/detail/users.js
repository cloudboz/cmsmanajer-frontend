import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";

import Modal from "components/Modal";
import Input from "components/Input";
import ListHeader from "components/ListHeader";
import ListItem from "components/ListItem";

import useSysUser from "hooks/systemUser";
import useServer from "hooks/server";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(4).required(),
});

export default function ServerUsers({ server }) {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { getSysUsersByServer } = useServer();
  const { createSysUser } = useSysUser();

  const {
    data: users,
    isLoading: isLoadingUsers,
    refetch,
  } = getSysUsersByServer(server.id);
  const { mutateAsync: create, isLoading } = createSysUser;

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      server: {
        id: server.id,
        ip: server.ip,
      },
    },
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
    validationSchema: schema,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitForm = async (values) => {
    try {
      // console.log(values);
      await create(values);
      refetch();
      setOpen(false);
    } catch (error) {
      console.log(error.response?.message);
    }
  };

  const data = [
    { name: "username", label: "Username", placeholder: "e.g. ubuntu" },
    { name: "password", label: "Password", placeholder: "*****" },
  ];

  const headers = ["USERNAME"];
  const width = ["100%"];

  return (
    <Container disableGutters className={classes.center}>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h5" paragraph>
            Users
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Create User
          </Button>
        </Grid>
      </Grid>

      <ListHeader items={headers} width={width} />
      {users?.map(({ id, username }, i) => (
        <ListItem
          id={id}
          path={undefined}
          status={"white"}
          renderItem={
            <>
              <Box style={{ width: width[0] }}>
                <Typography>{username}</Typography>
              </Box>
            </>
          }
          key={i}
        />
      ))}

      <Modal size="xs" open={open} handleClose={handleClose}>
        <Typography variant="h5" paragraph>
          Create User
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
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
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.btn}
            type="submit"
            fullWidth
            disabled={!dirty || !isValid || isLoading}
          >
            Create User
          </Button>
        </form>
      </Modal>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    marginBottom: 30,
  },
  center: {
    justifyItems: "center",
  },
  empty: {},
  btn: {
    marginTop: 20,
    marginBottom: 3,
  },
  form: {
    marginBlock: "3px",
  },
}));
