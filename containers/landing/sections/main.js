import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    height: "100vh",
  },
  container: {
    height: "100%",
  },
  grid: {
    height: "100%",
    alignItems: "center",
    color: "white",
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
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.background}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container className={classes.grid}>
          <Grid item xs={7}>
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
          <Grid item xs></Grid>
        </Grid>
      </Container>
    </Container>
  );
}
