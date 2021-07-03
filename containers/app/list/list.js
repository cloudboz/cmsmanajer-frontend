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

export default function ListApp({ apps }) {
  const classes = useStyles();

  const headers = [
    "NAME",
    "DOMAIN",
    "TYPE",
    "SERVER",
    "SYSTEM USER",
    "DATABASES",
  ];
  const width = ["25%", "25%", "10%", "15%", "15%", "10%"];

  return (
    <Container disableGutters className={classes.center}>
      <ListHeader items={headers} width={width} />
      {apps?.map(
        ({ id, name, domain, type, server, systemUser, databases }, i) => (
          <ListItem
            id={id}
            status="white"
            path="/apps"
            renderItem={
              <>
                <Box style={{ width: width[0] }}>
                  <Typography>{name}</Typography>
                </Box>
                <Box style={{ width: width[1] }}>
                  <Typography>{domain}</Typography>
                </Box>
                <Box style={{ width: width[2] }}>
                  <Typography>{type}</Typography>
                </Box>
                <Box style={{ width: width[3] }}>
                  <Typography>{server.name}</Typography>
                </Box>
                <Box style={{ width: width[4] }}>
                  <Typography>{systemUser?.username}</Typography>
                </Box>
                <Box style={{ width: width[5] }}>
                  <Typography>{databases}</Typography>
                </Box>
              </>
            }
            key={i}
          />
        )
      )}
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
