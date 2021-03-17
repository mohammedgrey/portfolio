import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";

const useStyles = makeStyles((theme) => ({
  paper: {
    // border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: "rgb(41,54,71)",
    color: "white",
    fontFamily: "Neucha",
  },
}));

export default function SimplePopper(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = (event) => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <button style={props.buttonStyles} {...props} aria-describedby={id} type="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>{props.popperText}</div>
      </Popper>
    </div>
  );
}
