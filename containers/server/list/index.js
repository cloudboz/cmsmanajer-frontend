import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

import Server from "./list";
import EmptyServer from "./empty";

const useStyles = makeStyles((theme) => ({
  center: {
    justifyItems: "center",
    display: "grid",
  },
  empty: {},
  btn: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
  },
}));

export default function ListServer() {
  const classes = useStyles();

  return (
    <Box>
      <Grid container style={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography variant="h4" paragraph>
            Servers
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Connect Server
          </Button>
        </Grid>
      </Grid>
      {true ? <Server /> : <EmptyServer />}
    </Box>
  );
}
