import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  country__flag: {
    display: "flex",
    justifyContent: "center",
  },
  coverImg: {
    width: "100%",
    objectFit: "fill",
    border: "1px solid black",
  },
});

const CountryFlag = ({ flag, name }) => {
  const classes = useStyles();
  return (
    <div className={classes.country__flag}>
      <img src={flag} alt={name} className={classes.coverImg} />
    </div>
  );
};

export default CountryFlag;
