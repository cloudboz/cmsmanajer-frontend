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
            <Typography variant="h6" paragraph>
              Automate server configuration
            </Typography>
            <Typography>
              With just a few clicks of a button, server configuration is
              automated with the best configuration (tailored by us, no less!)
              to handle any traffic, saving you time and trouble.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.item}>
            <Typography variant="h6" paragraph>
              Automate server configuration
            </Typography>
            <Typography variant="body1">
              With just a few clicks of a button, server configuration is
              automated with the best configuration (tailored by us, no less!)
              to handle any traffic, saving you time and trouble.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.item}>
            <Typography variant="h6" paragraph>
              Automate server configuration
            </Typography>
            <Typography>
              With just a few clicks of a button, server configuration is
              automated with the best configuration (tailored by us, no less!)
              to handle any traffic, saving you time and trouble.
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
  },
}));
