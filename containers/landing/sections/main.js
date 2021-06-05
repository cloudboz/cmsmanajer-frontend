import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    minHeight: "100vh",
  },
  container: {
    height: "100%",
    alignContent: "center",
  },
  grid: {
    minHeight: "100vh",
    alignSelf: "center",
    color: "white",
    alignContent: "center",
    alignItem: "center",
    paddingBlock: theme.spacing(15),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  subtitle: {
    lineHeight: "1.8",
    paddingRight: theme.spacing(10),
    fontWeight: "normal",
    marginBottom: theme.spacing(5),
  },
  primary: {
    fontSize: 20,
    fontWeight: "medium",
    borderRadius: 50,
    paddingInline: theme.spacing(6),
    paddingBlock: theme.spacing(2),
  },
  image: {
    display: "block",
    position: "absolute",
    right: 0,
    height: "auto",
    width: "45vw",
    top: theme.spacing(13),
  },
  center: {
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.background}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container className={classes.grid}>
          <Grid item md={7} className={classes.center}>
            <Typography variant="h2" className={classes.title}>
              A Simple Control Panel for Managing Cloud Server
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              We make it simple to launch in the cloud and scale up as you grow
              — with an intuitive control panel, predictable pricing and more.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.primary}
            >
              GET STARTED
            </Button>
          </Grid>
          <Grid item md>
            <img src="/amico.svg" className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
