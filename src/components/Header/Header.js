import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  headerBGColor: {
    backgroundColor: "#F57E21",
  },
  headerTextColor: {
    color: "#fff",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.headerBGColor}>
      <Container>
        <Toolbar variant="regular">
          <Link to="/">
            <Typography variant="h4" className={classes.headerTextColor}>
              CountryCodes
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
