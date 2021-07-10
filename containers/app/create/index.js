import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  makeStyles,
  Paper,
  Grid,
} from "@material-ui/core";

import Layout from "components/Layout";
import Item from "./components/item";
import Form from "./components/Form";

import useServer from "hooks/server";
import useApp from "hooks/app";
import useSysUser from "hooks/systemUser";
import { useRouter } from "next/router";
import Select from "components/Select";

export default function CreateApp({ user }) {
  const classes = useStyles();
  const router = useRouter();
  const { getServers, editServer: edit } = useServer();
  const { createApp: create } = useApp();
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");
  const [stack, setStack] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [server, setServer] = React.useState({});

  const { data: servers, isLoading, refetch } = getServers();

  React.useEffect(() => {
    setServer(servers?.[index] || {});
  }, [servers]);

  const handleClick =
    ({ name, type, stack }) =>
    () => {
      setName(name);
      setType(type);
      setStack(stack);
    };

  const handleSubmit = async (values) => {
    try {
      const body = {
        ...values,
        server,
      };
      console.log(body);
      await create.mutateAsync(body);
      router.push("/apps");
    } catch (error) {}
  };

  const handleChangeWebServer = async (value) => {
    try {
      await edit.mutateAsync({ id: server.id, body: { webServer: value } });
      refetch();
    } catch (error) {
      console.log(error.response);
    }
  };

  const validate = (app, server = {}) => {
    if (server[app.name.toLowerCase()]) return true;
    if (
      (app.name == "Apache" || app.name == "LAMP") &&
      server.webServer != "apache"
    )
      return true;
    else if (
      (app.name == "Nginx" || app.name == "LEMP") &&
      server.webServer != "nginx"
    )
      return true;
    return false;
  };

  return isLoading ? (
    <></>
  ) : (
    <Layout>
      <Typography variant="h4" paragraph>
        Create App
      </Typography>

      <Paper variant="outlined" style={{ padding: 30, marginBottom: 10 }}>
        <Box style={{ marginBottom: 20 }}>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <Select
                name="server"
                label="Server"
                placeholder="Choose server..."
                value={server}
                handleChange={(e) => {
                  setServer(e.target.value);
                  setIndex(servers.findIndex((s) => s == e.target.value));
                }}
                options={servers}
                renderOption="name"
              />
            </Grid>
          </Grid>
        </Box>

        {/* <Paper variant="outlined" style={{ padding: 30 }}> */}
        <Box className={classes.root}>
          {listApp.map((app, i) => (
            <Item
              name={app.name}
              icon={app.icon}
              key={i}
              onClick={handleClick(app)}
              active={app.name == name}
              disabled={validate(app, server)}
            />
          ))}
        </Box>
        {server.webServer == "nginx" && !server.nginx && (
          <Typography variant="subtitle2" style={{ marginTop: 10 }}>
            You are currently using Nginx.{" "}
            <Link
              color="inherit"
              className={classes.link}
              onClick={() => handleChangeWebServer("apache")}
            >
              Switch to Apache
            </Link>
          </Typography>
        )}
        {server.webServer == "apache" && !server.apache && (
          <Typography variant="subtitle2" style={{ marginTop: 10 }}>
            You are currently using Apache.{" "}
            <Link
              color="inherit"
              className={classes.link}
              onClick={() => handleChangeWebServer("nginx")}
            >
              Switch to Nginx
            </Link>
          </Typography>
        )}
      </Paper>
      <Box>
        <Form
          classes={classes}
          server={server}
          name={name}
          type={type}
          stack={stack}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    // flexWrap: "wrap",
    gridTemplateColumns: "repeat(auto-fit, minmax(125px, 1fr))",
    gap: 10,
    // height: 150
    // marginBottom: 20,
    // justifyContent: "space-between",
    "& > *": {
      // margin: theme.spacing(1),
      // width: theme.spacing(16),
      // height: theme.spacing(16),
    },
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
  list: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  form: {
    marginBlock: "3px",
  },
  link: {
    cursor: "pointer",
    fontWeight: 700,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const listApp = [
  {
    name: "Nginx",
    icon: "/nginx.svg",
    type: "web",
    stack: "nginx",
  },
  {
    name: "Apache",
    icon: "/apache.svg",
    type: "web",
    stack: "apache",
  },

  {
    name: "MySQL",
    icon: "/mysql.svg",
    type: "app",
  },
  {
    name: "MongoDB",
    icon: "/mongodb.svg",
    type: "app",
  },
  {
    name: "Docker",
    icon: "/docker.svg",
    type: "app",
  },
  {
    name: "WordPress",
    icon: "/wordpress-circular.svg",
    type: "wordpress",
  },
  {
    name: "LEMP",
    icon: "/lemp.svg",
    type: "web",
    stack: "lemp",
  },
  {
    name: "LAMP",
    icon: "/lamp.svg",
    type: "web",
    stack: "lamp",
  },
];
