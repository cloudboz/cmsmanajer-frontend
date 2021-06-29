import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";

import Layout from "components/Layout";
import Item from "./components/item";
import Form from "./components/Form";

import useServer from "hooks/server";
import useApp from "hooks/app";
import useSysUser from "hooks/systemUser";
import { useRouter } from "next/router";

export default function CreateApp({ user }) {
  const classes = useStyles();
  const router = useRouter();
  const { getServers } = useServer();
  const { createApp: create } = useApp();
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");
  const [stack, setStack] = React.useState("");

  const { data: servers, isLoading } = getServers();

  const handleClick =
    ({ name, type, stack }) =>
    () => {
      setName(name);
      setType(type);
      setStack(stack);
    };

  const handleSubmit = async (values) => {
    console.log(values);
    await create.mutateAsync(values);
    router.push("/apps");
  };

  return (
    <Layout>
      <Typography variant="h4" paragraph>
        Create App
      </Typography>

      <Box className={classes.root}>
        {listApp.map((app, i) => (
          <Item
            name={app.name}
            icon={app.icon}
            key={i}
            onClick={handleClick(app)}
            active={app.name == name}
          />
        ))}
      </Box>
      <Box>
        <Form
          classes={classes}
          servers={servers}
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
    marginBottom: 20,
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
}));

const listApp = [
  {
    name: "Apache",
    icon: "/apache.svg",
    type: "web",
    stack: "apache",
  },
  {
    name: "Nginx",
    icon: "/nginx.svg",
    type: "web",
    stack: "nginx",
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
    name: "LAMP",
    icon: "/lamp.svg",
    type: "web",
    stack: "lamp",
  },
  {
    name: "LEMP",
    icon: "/lemp.svg",
    type: "web",
    stack: "lemp",
  },
];
