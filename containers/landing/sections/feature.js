import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

export default function Feature() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container className={classes.grid}>
        <Typography
          variant="h4"
          align="center"
          className={classes.bold}
          paragraph
        >
          An Autopilot for Server
        </Typography>
        <Typography variant="subtitle1" className={classes.sub} align="center">
          Optimised configurations and best practices for your servers? You can
          either leave them to us if you are not up to it or tinker with your
          servers to your heart’s content
        </Typography>
      </Grid>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs>
          <Paper className={classes.item}>
            <Typography variant="h6" paragraph className={classes.paper}>
              Security
            </Typography>
            <Typography>
              Automate updates and firewalls, Secure architecture. We take away
              the worry
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.item}>
            <Typography variant="h6" paragraph className={classes.paper}>
              Service Management
            </Typography>
            <Typography variant="body1">
              Manage and monitoring multiple server with one dashboard.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.item}>
            <Typography variant="h6" paragraph className={classes.paper}>
              Server Optimization
            </Typography>
            <Typography>
              By default we update kernel configuration, create swap memory and
              optimization performance
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.item}>
            <Typography variant="h6" paragraph className={classes.paper}>
              One-Click Install
            </Typography>
            <Typography>
              Support all your favourite application or CMS like wordpress
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBlock: theme.spacing(10),
  },
  item: {
    paddingBlock: theme.spacing(3),
    paddingInline: theme.spacing(5),
    height: 237,
  },
  grid: {
    justifyContent: "center",
    marginBlockEnd: theme.spacing(5),
  },
  bold: {
    fontWeight: 600,
  },
  sub: {
    paddingInline: theme.spacing(12),
    [theme.breakpoints.down("xs")]: {
      paddingInline: theme.spacing(2),
    },
  },
  paper: {
    [theme.breakpoints.up("xl")]: {
      fontSize: 24,
    },
  },
}));
