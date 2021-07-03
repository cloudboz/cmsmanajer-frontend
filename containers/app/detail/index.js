import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

import { useRouter } from "next/router";

import Layout from "components/Layout";
import Tabs from "components/Tabs";
import AppDatabases from "./databases";
import AppSettings from "./settings";

import useServer from "hooks/server";
import useApp from "hooks/app";

export default function DetailApp({ id }) {
  const classes = useStyles();
  const router = useRouter();
  const { getAppByID, getDatabasesByApp } = useApp();

  const { data: app, isLoading: isLoadingServer } = getAppByID(id);
  const { data: dbs, isLoading: isLoadingApps } = getDatabasesByApp(id);

  const tabsItem = ["Databases", "Settings"];

  return (
    <Layout>
      {isLoadingServer || isLoadingApps || isLoadingUsers ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Grid container style={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography variant="h4">{server.name}</Typography>
              <Grid container spacing={5}>
                <Grid item>
                  <Typography variant="body1" paragraph>
                    Server: {app.server.name}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="body1" paragraph>
                    IP: {app.server.ip}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="body1" paragraph>
                    Type: {app.type}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Tabs items={tabsItem}>
            <AppDatabases dbs={dbs} />
            <AppSettings app={app} />
          </Tabs>
        </>
      )}
    </Layout>
  );
}

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
}));
