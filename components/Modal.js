import React from "react";
import {
  Dialog,
  DialogContent,
  Slide,
  Paper,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {},
  paper: {
    padding: 35,
    borderRadius: 50,
  },
}));

export default function Modal({ open, handleClose, size, children }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.modal}
      TransitionComponent={Transition}
      maxWidth={size}
    >
      <DialogContent className={classes.paper}>{children}</DialogContent>
    </Dialog>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
