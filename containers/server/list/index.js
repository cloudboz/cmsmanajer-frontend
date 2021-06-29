import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

import React from "react";
import { useRouter } from "next/router";

import Layout from "components/Layout";
import ListServer from "./list";
import EmptyServer from "./empty";

import useServer from "hooks/server";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    marginBottom: 30,
  },
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
}));

export default function Server() {
  const classes = useStyles();
  const router = useRouter();
  const { getServers } = useServer();

  const { data: servers, isLoading } = getServers();

  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h4" paragraph>
            Servers
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/servers/connect")}
          >
            Connect Server
          </Button>
        </Grid>
      </Grid>
      {isLoading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : servers?.length ? (
        <ListServer servers={servers} />
      ) : (
        <EmptyServer />
      )}
    </Layout>
  );
}
