import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

export default function Invitation() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.bg}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={7} className={classes.text}>
            <Typography variant="h3" className={classes.title} paragraph>
              Make your life easier now!
            </Typography>
            <Typography variant="h5" paragraph className={classes.subtitle}>
              Manage your server with only one click.
            </Typography>
            <div className={classes.btnGroup}>
              <Button
                variant="contained"
                color="primary"
                className={classes.primary}
              >
                SIGN UP
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.primary}
              >
                DOCS
              </Button>
            </div>
          </Grid>
          <Grid item md={5}>
            <img src="/pana.svg" className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  bg: {
    background: `linear-gradient(96.72deg, ${theme.palette.primary.main} 19.52%, ${theme.palette.primary.light} 81.79%);`,
  },
  text: {
    paddingBlock: theme.spacing(10),
    color: "white",
    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 32,
    },
  },
  subtitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  primary: {
    fontSize: 20,
    fontWeight: "medium",
    borderRadius: 50,
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(1.5),
    width: "9rem",
    [theme.breakpoints.down("xs")]: {
      paddingInline: theme.spacing(2),
      paddingBlock: theme.spacing(0.5),
      marginBottom: 15,
      fontSize: 16,
    },
  },
  btnGroup: {
    "& > *": {
      marginRight: theme.spacing(2),
    },
    marginBlockStart: theme.spacing(5),
  },
  img: {
    alignSelf: "flex-end",
  },
  image: {
    paddingBlockStart: theme.spacing(3),
    display: "block",
    width: "100%",
  },
}));
