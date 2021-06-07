import { Box, Container, Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import bg from "/public/bg.png";

import Form from "./components/form";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundColor: "white",
    // backgroundImage: `url(${bg})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  image: {
    display: "block",
    position: "absolute",
    right: 0,
    height: "auto",
    width: "45vw",
    top: theme.spacing(13),
  },
  blue: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  logo: {
    fontWeight: "bold",
    marginBottom: theme.spacing(10),
  },
}));

export default function Register() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} direction="row-reverse">
      <Grid item container md={5} sm className={classes.blue}>
        <Container maxWidth="xs" disableGutters style={{ padding: "5px" }}>
          <Form />
        </Container>
      </Grid>
      <Hidden smDown>
        <Grid item container md sm={4}>
          <Container
            maxWidth="sm"
            style={{ paddingRight: "50px", marginBlock: "100px" }}
          >
            <Typography variant="h5" className={classes.logo}>
              CMS Manajer
            </Typography>
            <Typography variant="h3" className={classes.bold} paragraph>
              A few clicks away from connecting your server
            </Typography>
            <Typography variant="h6" style={{ fontWeight: "normal" }}>
              Manage your servers in a simple way
            </Typography>
          </Container>
        </Grid>
      </Hidden>
    </Grid>
  );
}
