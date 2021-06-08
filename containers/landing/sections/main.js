import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

// import bg from "/bg.png";

const useStyles = makeStyles((theme) => ({
  background: {
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    minHeight: "100vh",
    backgroundImage: `/bg.png`,
  },
  backgroundImage: {
    backgroundImage: `/bg.png`,
    height: "100vh",
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
      <Image
        alt="Abstract"
        src="/bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: 0 }}
      />
      {/* <Box className={classes.backgroundImage}> */}
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
      {/* </Box> */}
    </Container>
  );
}
