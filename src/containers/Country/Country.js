import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getLocalTime } from "../../assets/util/getLocalTime";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ReactMapGL from "react-map-gl";
import axios from "axios";
import Table from "../../components/Table/Table";
import CountryInfos from "../../components/CountryInfos/CountryInfos";
import CountryFlag from "../../components/CountryInfos/CountryFlag/CountryFlag";

const useStyles = makeStyles({
  containerMargin: {
    marginTop: "20px",
  },
  country: {
    fontFamily: "Archivo Black, sans-serif",
    textAlign: "center",
  },
  infoFont: {
    fontFamily: "Archivo Black, sans-serif",
    color: "#fff",
    margin: "20px",
  },
  divderMargin: {
    margin: "10px 0",
    border: 0,
    borderTop: "1px solid #fb8c00",
    padding: "0",
  },
  map: {
    display: "flex",
    justifyContent: "center",
  },
  info: {
    width: "100%",
    border: "1px solid #FB8C00",
    backgroundColor: "#FB8C00",
  },
});

const Country = (props) => {
  const classes = useStyles();
  const [country, setCountry] = useState({});
  const [time, setTime] = useState("");
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "500px",
    zoom: 4.5,
  });

  const timer = (utc) => {
    setTime(getLocalTime(utc, "time"));
  };

  useEffect(() => {
    let updateState = true;
    let tick;
    try {
      const getCountryData = async () => {
        const countryData = await axios.get("/rest/v2/all");

        let countryObj = {};

        for (let country of countryData.data) {
          if (country.name.split(" ").join("") === props.match.params.cc) {
            countryObj = { ...country };
          }
        }

        if (updateState) {
          setCountry(countryObj);
          tick = setInterval(() => timer(countryObj.timezones[0]), 1000);
        }
      };

      getCountryData();
    } catch (err) {
      console.log(err.message);
    }

    return () => {
      updateState = false;
      clearInterval(tick);
    };
  }, [props.match.params.cc, time]);

  return (
    <Container className={classes.containerMargin}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CountryFlag flag={country.flag} name={country.name} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" className={classes.country}>
            {country.name &&
              `${country.name.toUpperCase()} (${country.alpha2Code})`}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div className={classes.info}>
            <Typography variant="h4" className={classes.infoFont}>
              Info
            </Typography>
          </div>

          <Divider className={classes.divderMargin} />

          <CountryInfos
            region={country.region}
            capital={country.capital}
            population={country.population}
            currencies={country.currencies}
          />

          <Divider className={classes.divderMargin} />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Table
            date={
              country.timezones && getLocalTime(country.timezones[0], "date")
            }
            time={time}
            timezone={country.timezones && country.timezones[0]}
            callingCode={country.callingCodes && country.callingCodes[0]}
          />
        </Grid>

        <Grid item xs={12} className={classes.map}>
          <ReactMapGL
            {...viewport}
            latitude={country.latlng && country.latlng[0]}
            longitude={country.latlng && country.latlng[1]}
            mapStyle="mapbox://styles/corps2433/ck7hasrw30xhe1ilvvzw0r891"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={setViewport}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default withRouter(Country);
