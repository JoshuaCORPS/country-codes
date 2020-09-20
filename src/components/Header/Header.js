import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  headerBGColor: {
    backgroundColor: "#F57E21",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.headerBGColor}>
      <Container>
        <Toolbar variant="regular">
          <Typography variant="h5" color="inherit">
            CountryCodes
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
