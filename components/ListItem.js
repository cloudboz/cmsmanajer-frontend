import { Paper, Typography, makeStyles, Box } from "@material-ui/core";
import { useRouter } from "next/router";

const radius = 15;
const padding = 60;
const active = "#32D69F";

export default function ListItem({ id, path, renderItem, status, onClick }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box
      className={classes.root}
      onClick={() => {
        if (path) router.push(path + "/" + id);
        else if (onClick) onClick();
      }}
    >
      <Box variant="outlined" className={classes.item}>
        {renderItem}
      </Box>
      <Box className={classes.status} style={{ backgroundColor: status }}></Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: 10,
    cursor: "pointer",
  },
  item: {
    backgroundColor: "white",
    width: "100%",
    paddingLeft: padding,
    paddingRight: padding - radius,
    paddingBlock: 20,
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    display: "flex",
    justifyContent: "space-between",
  },
  status: {
    borderBottomRightRadius: radius,
    borderTopRightRadius: radius,
    width: radius,
  },
}));
