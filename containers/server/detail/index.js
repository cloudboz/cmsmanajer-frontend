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
import ServerApps from "./apps";
import ServerUsers from "./users";
import ServerSettings from "./settings";

import useServer from "hooks/server";

export default function DetailServer({ id }) {
  const classes = useStyles();
  const router = useRouter();
  const { getServerByID, getAppsByServer, getSysUsersByServer } = useServer();

  const { data: server, isLoading: isLoadingServer } = getServerByID(id);
  const { data: apps, isLoading: isLoadingApps } = getAppsByServer(id);
  const { data: users, isLoading: isLoadingUsers } = getSysUsersByServer(id);

  const tabsItem = ["Apps", "Users", "Settings"];

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
                    IP: {server.ip}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="body1" paragraph>
                    Web server: {server.webServer || "None"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Tabs items={tabsItem}>
            <ServerApps apps={apps} server={server} />
            <ServerUsers users={users} server={server} />
            <ServerSettings
              server={server}
              apps={apps.length}
              users={users.length}
            />
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
