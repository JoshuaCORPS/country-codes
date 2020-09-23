import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  icons: {
    color: "#F75B00",
  },
  icons__text: {
    paddingLeft: "10px",
    fontSize: "20px",
    textTransform: "uppercase",
    color: "#000",
  },
  icons__text__sub: {
    paddingLeft: "45px",
    fontSize: "20px",
    textTransform: "uppercase",
    color: "#FB8C00",
  },
  alignIcons: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
  },
});

const CountryInfo = ({ Icon, title, value }) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.alignIcons}
        variant="subtitle1"
        color="textSecondary"
        component="p"
      >
        <Icon className={classes.icons} id="icon" />
        <span className={classes.icons__text} id="title">
          {title}
        </span>
      </Typography>
      <Typography variant="inherit" color="textSecondary" component="p">
        <span className={classes.icons__text__sub} id="value">
          {value}
        </span>
      </Typography>
    </>
  );
};

export default CountryInfo;
