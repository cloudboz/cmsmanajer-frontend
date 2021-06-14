import { Paper, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: "white",
    width: "100%",
    paddingLeft: 60,
    paddingRight: 40,
    paddingBlock: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  status: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#32D69F",
    width: 20,
  },
}));

export default function ListItem() {
  const classes = useStyles();

  return (
    <Box style={{ display: "flex" }}>
      <Box square variant="outlined" className={classes.item}>
        <Box>
          <Typography>Example server</Typography>
          <Typography>123.123.123</Typography>
        </Box>
        <Box>
          <Typography>Example server</Typography>
          <Typography>123.123.123</Typography>
        </Box>
        <Box>
          <Typography>Example server</Typography>
          <Typography>123.123.123</Typography>
        </Box>
        <Box>
          <Typography>Example server</Typography>
          <Typography>123.123.123</Typography>
        </Box>
      </Box>
      <Box className={classes.status}></Box>
    </Box>
  );
}
