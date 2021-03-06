import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Spinner from "../../components/Spinner/Spinner";
import CountryCard from "../../components/CountryCard/CountryCard";

const useStyles = makeStyles({
  countryCode: {
    fontFamily: "Archivo Black, sans-serif",
    textAlign: "center",
    marginBottom: "20px",
  },
  containerMargin: {
    marginTop: "20px",
  },
  content: {
    marginBottom: "20px",
  },
});

function Home() {
  const classes = useStyles();
  const [filterDisplay, setFilterDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const inputChangeHandler = (e) => {
    const word = e.target.value;
    const reg = new RegExp(`\\b${word}`, "i");

    if (word !== "") {
      const newList = countries.filter((country) => reg.test(country.name));
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(countries);
    }
  };
  useEffect(() => {
    let updateState = true;

    try {
      const getCountriesData = async () => {
        const countriesData = await axios.get("/rest/v2/all");

        if (updateState) {
          setCountries(countriesData.data);
          setFilterDisplay(countriesData.data);
          setLoading(false);
        }
      };

      getCountriesData();
    } catch (err) {
      console.log(err.message);
    }

    return () => {
      updateState = false;
    };
  }, []);

  const countryCard = filterDisplay.map((country) => {
    return (
      <Grid item sm={12} md={4} key={country.alpha3Code}>
        <Link to={`${country.name.split(" ").join("")}`}>
          <CountryCard country={country} />
        </Link>
      </Grid>
    );
  });

  let content = countryCard;
  if (loading) content = <Spinner />;

  return (
    <Container className={classes.containerMargin}>
      <Typography variant="h4" component="h1" className={classes.countryCode}>
        Country Codes
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        fullWidth
        onChange={inputChangeHandler}
        className={classes.content}
      />
      <Grid container spacing={3}>
        {content}
      </Grid>
    </Container>
  );
}

export default Home;
