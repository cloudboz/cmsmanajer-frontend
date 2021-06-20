import { Paper, Typography, makeStyles } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    paddingBlock: 25,
    paddingInline: 25,
    cursor: "pointer",
    height: 125,
    position: "relative",
    "&:hover": {
      borderWidth: 2,
      borderColor: theme.palette.secondary.main,
    },
  },
  active: {
    borderWidth: 2,
    borderColor: theme.palette.secondary.main,
  },
  icon: {
    height: 45,
    height: 45,
    display: "block",
    justifySelf: "center",
    marginBottom: 10,
  },
  check: {
    position: "absolute",
    // float: "right",
    right: 5,
    top: 5,
  },
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default function Item({ icon, name, active, onClick }) {
  const classes = useStyles();

  return (
    <Paper
      variant="outlined"
      className={clsx(classes.root, active && classes.active)}
      onClick={onClick}
    >
      {active && (
        <CheckCircleIcon color="secondary" className={classes.check} />
      )}
      <img src={icon} className={classes.icon} />
      <Typography align="center" variant="body2" className={classes.bold}>
        {name}
      </Typography>
    </Paper>
  );
}
