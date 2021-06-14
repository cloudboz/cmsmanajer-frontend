import { Paper, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: "transparent",
    width: "100%",
    paddingInline: 60,
    paddingBlock: 10,
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

export default function ListHeader() {
  const classes = useStyles();

  return (
    <Box className={classes.item}>
      <Box>
        <Typography>SERVER</Typography>
      </Box>
      <Box>
        <Typography>MEMORY</Typography>
      </Box>
      <Box>
        <Typography>CPU</Typography>
      </Box>
      <Box>
        <Typography>DISK</Typography>
      </Box>
    </Box>
  );
}
