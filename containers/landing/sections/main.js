import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

export default function Main() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.background}>
      <Image
        alt="Abstract"
        src="/bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: 0 }}
      />
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
          <Hidden smDown>
            <Grid item md>
              <img src="/servers.svg" className={classes.image} />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    minHeight: 830,
    [theme.breakpoints.up("xl")]: {
      minHeight: 930,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: 750,
      maxHeight: 750,
    },
  },
  container: {
    height: "100%",
    alignContent: "center",
    zIndex: 1,
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
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  subtitle: {
    lineHeight: "1.8",
    paddingRight: theme.spacing(10),
    fontWeight: "normal",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      paddingRight: theme.spacing(2),
    },
  },
  primary: {
    fontSize: 20,
    fontWeight: "medium",
    borderRadius: 50,
    paddingInline: theme.spacing(6),
    paddingBlock: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      paddingInline: theme.spacing(4),
      paddingBlock: theme.spacing(1),
    },
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
