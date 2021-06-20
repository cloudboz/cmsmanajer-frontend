import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";

import Item from "./components/item";
import Form from "./components/Form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    // flexWrap: "wrap",
    gridTemplateColumns: "repeat(auto-fit, minmax(125px, 1fr))",
    gap: 10,
    // height: 150
    marginBottom: 30,
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

const listApp = [
  {
    name: "Apache",
    icon: "/apache.svg",
    type: "web",
  },
  {
    name: "Nginx",
    icon: "/nginx.svg",
    type: "web",
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
  },
  {
    name: "LEMP",
    icon: "/lemp.svg",
    type: "web",
  },
];

export default function CreateApp() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");

  const servers = [
    {
      id: "asd",
      name: "servername",
      ip: "123.231.213.12",
    },
    {
      id: "jhfkjd",
      name: "staging 1",
      ip: "01.10.10.10",
    },
  ];

  const users = [
    {
      id: "asd",
      username: "ubuntu",
      password: "123.231.213.12",
    },
    {
      id: "jhfkjd",
      username: "usus buntu",
      password: "01.10.10.10",
    },
  ];

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleClick =
    ({ name, type }) =>
    () => {
      setName(name);
      setType(type);
    };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <Box>
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
          users={users}
          name={name}
          type={type}
        />
      </Box>
    </Box>
  );
}
