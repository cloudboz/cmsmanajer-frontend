import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  TextField,
  Paper,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { useRouter } from "next/router";

import useServer from "hooks/server";
import Modal from "components/Modal";
import Section from "components/Section";
import Detail from "components/Detail";

export default function AppSettings({ apps, users, server }) {
  const classes = useStyles();
  const router = useRouter();
  // const { getAppsByServer } = useServer();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(server.name);
  const [deleteName, setDelete] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDelete("");
  };

  const handleRename = async (values) => {
    console.log(values);
  };

  const handleDelete = async (values) => {
    console.log(values);
    router.push("/apps");
  };

  return (
    <Container disableGutters className={classes.center}>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h5" paragraph>
            Settings
          </Typography>
        </Grid>
      </Grid>

      <Section name="App Information">
        <Typography variant="body1" className={classes.bold} gutterBottom>
          Server Name
        </Typography>
        <Box className={classes.flex}>
          <TextField
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={name == server.name}
            onClick={handleRename}
          >
            Rename
          </Button>
        </Box>
        <Typography variant="caption" paragraph>
          This does not change the name of your actual server.
        </Typography>

        <Detail label="IP Address" value={server.ip} />
        <Detail label="Apps" value={apps} />
        <Detail label="System Users" value={users} />
        <Detail label="Web Server" value={server.webServer} />
      </Section>

      <Section name="Delete App">
        <Typography variant="body1" className={classes.bold}>
          Delete this app
        </Typography>
        <Typography variant="subtitle" paragraph>
          Deleting this app will remove its databases. This action is permanent
          and cannot be undone.
        </Typography>
        <Button variant="outlined" className={classes.btn} onClick={handleOpen}>
          Delete app
        </Button>
      </Section>

      <Modal open={open} handleClose={handleClose}>
        <Typography variant="h5" paragraph>
          Delete App
        </Typography>

        <Alert severity="warning" style={{ marginBottom: 30 }}>
          <Typography className={classes.bold} gutterBottom>
            You are about to delete this app
          </Typography>
          <Typography variant="body2">
            This action <b>cannot</b> be undone. This will <b>permanently</b>{" "}
            delete the <b>{server.name}</b> app and databases.
          </Typography>
        </Alert>
        <Typography variant="body1">
          Please type <b>{server.name}</b> to confirm.
        </Typography>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          className={classes.input}
          value={deleteName}
          onChange={(e) => setDelete(e.target.value)}
        />
        <Button
          variant="outlined"
          className={classes.btn}
          fullWidth
          disabled={deleteName != server.name}
          onClick={handleDelete}
        >
          I understand the consequences, delete app.
        </Button>
      </Modal>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    marginBottom: 30,
  },
  flex: {
    display: "flex",
    columnGap: 7,
  },
  center: {
    justifyItems: "center",
  },
  bold: {
    fontWeight: theme.typography.fontWeightSemiBold,
    opacity: "80%",
  },
  btn: {
    border: `1px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      backgroundColor: `${theme.palette.error.main}15`,
    },
  },
  input: {
    paddingBottom: 10,
  },
}));
