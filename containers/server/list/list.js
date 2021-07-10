import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

import ListHeader from "components/ListHeader";
import ListItem from "components/ListItem";

export default function ListServer({ servers }) {
  const classes = useStyles();

  const headers = ["NAME", "IP", "WEB SERVER", "APPS"];
  const width = ["35%", "25%", "30%", "10%"];

  return (
    <Container disableGutters className={classes.center}>
      <ListHeader items={headers} width={width} />
      {servers?.map(({ id, name, ip, webServer, apps }, i) => (
        <ListItem
          id={id}
          status="#32D69F"
          path="/servers"
          renderItem={
            <>
              <Box style={{ width: width[0] }}>
                <Typography>{name}</Typography>
              </Box>
              <Box style={{ width: width[1] }}>
                <Typography>{ip.replace("\n", "; ")}</Typography>
              </Box>
              <Box style={{ width: width[2] }}>
                <Typography>{webServer || "-"}</Typography>
              </Box>
              <Box style={{ width: width[3] }}>
                <Typography>{apps}</Typography>
              </Box>
            </>
          }
          key={i}
        />
      ))}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  center: {
    justifyItems: "center",
  },
  empty: {},
  btn: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
  },
}));
