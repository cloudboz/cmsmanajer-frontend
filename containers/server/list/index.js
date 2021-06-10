import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Navbar from "../../../components/Navbar";

const useStyles = makeStyles((theme) => ({
  offset: {
    paddingTop: 100,
    height: "100vh",
  },
}));

export default function ListServer() {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Container className={classes.offset}>
        <Typography variant="h4">Servers</Typography>
      </Container>
    </Box>
  );
}
