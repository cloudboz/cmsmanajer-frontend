import React from "react";
import {
  Dialog,
  DialogContent,
  Slide,
  Paper,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {},
  paper: {
    padding: 35,
    borderRadius: 50,
  },
  closeButton: {
    position: "absolute",
    right: 35,
    top: 35,
    padding: 0,
    color: theme.palette.grey[500],
  },
}));

export default function Modal({
  open,
  handleClose,
  size,
  children,
  keepOnClickAway = false,
}) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.modal}
      TransitionComponent={Transition}
      disableBackdropClick={keepOnClickAway}
      disableEscapeKeyDown={keepOnClickAway}
      maxWidth={size}
    >
      {keepOnClickAway && (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon fontSize="32px" />
        </IconButton>
      )}
      <DialogContent className={classes.paper}>{children}</DialogContent>
    </Dialog>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
