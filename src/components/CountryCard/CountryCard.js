import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import LanguageIcon from "@material-ui/icons/Language";
import RoomIcon from "@material-ui/icons/Room";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles({
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

const CountryCard = (props) => {
  const classes = useStyles();
  const country = props.country;

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
};

export default CountryCard;
