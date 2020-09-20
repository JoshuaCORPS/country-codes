import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const Country = (props) => {
  const [country, setCountry] = useState({});
  const [time, setTime] = useState("");

  const getLocalTime = (off) => {
    const convertedOffset = off.split("UTC")[1].split(":");

    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = parseFloat(convertedOffset);

    const time = utc + 3600000 * offset;

    const countryLocalTime = new Date(time).toLocaleTimeString();

    return countryLocalTime;
  };

  useEffect(() => {
    let updateState = true;

    try {
      const getCountryData = async () => {
        const countryData = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );

        let countryObj = {};

        for (let country of countryData.data) {
          if (country.name.split(" ").join("") === props.match.params.cc) {
            countryObj = { ...country };
          }
        }
        const time = getLocalTime(countryObj.timezones[0]);

        if (updateState) {
          setCountry(countryObj);
          setTime(time);
        }
      };

      getCountryData();
    } catch (err) {
      console.log(err.message);
    }

    return () => {
      updateState = false;
    };
  }, [props.match.params.cc, country]);

  return (
    <div>
      <h1>{`${country.name}`}</h1>
      <h1>{time}</h1>
    </div>
  );
};

export default withRouter(Country);
