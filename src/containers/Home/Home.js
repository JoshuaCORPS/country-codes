import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LanguageIcon from "@material-ui/icons/Language";
import RoomIcon from "@material-ui/icons/Room";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CallIcon from "@material-ui/icons/Call";
import Spinner from "../../components/Spinner/Spinner";

const useStyles = makeStyles({
  containerMargin: {
    marginTop: "20px",
  },
  cardMedia: {
    height: "250px",
  },

  icons: {
    color: "#F75B00",
  },
  icons__text: {
    paddingLeft: "5px",
  },
  alignIcons: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
  },
});

function Home() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let updateState = true;

    try {
      const getCountriesData = async () => {
        const countriesData = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );

        if (updateState) {
          setCountries(countriesData.data);
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

  const countryCard = countries.map((country) => {
    return (
      <Grid item sm={12} md={4} key={country.alpha3Code}>
        <Link to={`${country.name.split(" ").join("")}`}>
          <Card>
            <CardActionArea>
              <CardMedia
                image={country.flag}
                title="country flag"
                className={classes.cardMedia}
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.alignIcons}
                      variant="subtitle1"
                      color="textSecondary"
                      component="p"
                    >
                      <LanguageIcon className={classes.icons} />
                      <span className={classes.icons__text}>
                        {`${country.name} (${country.alpha2Code})`}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.alignIcons}
                      variant="subtitle1"
                      color="textSecondary"
                      component="p"
                    >
                      <RoomIcon className={classes.icons} />
                      <span className={classes.icons__text}>
                        {country.region === "Americas"
                          ? "America"
                          : country.region}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.alignIcons}
                      variant="subtitle1"
                      color="textSecondary"
                      component="p"
                    >
                      <AccessTimeIcon className={classes.icons} />
                      <span className={classes.icons__text}>
                        {country.timezones[0]}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      className={classes.alignIcons}
                      variant="subtitle1"
                      color="textSecondary"
                      component="p"
                    >
                      <CallIcon className={classes.icons} />
                      <span
                        className={classes.icons__text}
                      >{`+ ${country.callingCodes[0]}`}</span>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button fullWidth size="small" className={classes.icons}>
                View More
              </Button>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    );
  });

  let content = countryCard;
  if (loading) content = <Spinner />;

  return (
    <Container className={classes.containerMargin}>
      <Typography
        variant="h4"
        component="h1"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Country Codes
      </Typography>
      <Grid container spacing={3}>
        {content}
      </Grid>
    </Container>
  );
}

export default Home;
