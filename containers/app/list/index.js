import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Tooltip,
  makeStyles,
} from "@material-ui/core";

import React from "react";
import { useRouter } from "next/router";

import Layout from "components/Layout";
import ListApp from "./list";
import EmptyApp from "./empty";
import EmptyServer from "./empty";

import useApp from "hooks/app";
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

export default function App() {
  const classes = useStyles();
  const router = useRouter();
  const { getApps } = useApp();
  const { getServers } = useServer();

  const { data: apps, isLoading } = getApps();
  const { data: servers, isLoading: isLoadingServer } = getServers();

  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h4" paragraph>
            Apps
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip
            title="You haven't connected any servers"
            disableHoverListener={servers?.length}
          >
            <span>
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push("/apps/create")}
                disable={!servers?.length}
              >
                Create App
              </Button>
            </span>
          </Tooltip>
        </Grid>
      </Grid>
      {isLoading || isLoadingServer ? (
        <>
          <h1>Loading</h1>
        </>
      ) : apps?.length ? (
        <ListApp apps={apps} status="white" />
      ) : servers?.length ? (
        <EmptyApp />
      ) : (
        <EmptyServer />
      )}
    </Layout>
  );
}
