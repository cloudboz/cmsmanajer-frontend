import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import { Main, Provider, Feature, Invitation, About, Footer } from "./sections";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "block",
    position: "absolute",
    right: 0,
    height: "auto",
    width: "45vw",
    top: theme.spacing(13),
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Main />
      {/* <img src="/amico.svg" className={classes.image} /> */}
      <Provider />
      <Feature />
      <Invitation />
      <About />
      <Footer />
    </>
  );
}
