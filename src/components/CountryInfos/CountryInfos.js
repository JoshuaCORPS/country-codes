import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PersonIcon from "@material-ui/icons/Person";

import CountryInfo from "./CountryInfo/CountryInfo";

const CountryInfos = ({ region, capital, population, currencies }) => (
  <>
    <CountryInfo Icon={RoomIcon} title="Continent" value={region} />
    <CountryInfo Icon={AccountBalanceIcon} title="Capital" value={capital} />
    <CountryInfo
      Icon={PersonIcon}
      title="Population"
      value={
        population &&
        population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      }
    />
    <CountryInfo
      Icon={LocalAtmIcon}
      title="Currency"
      value={currencies && `${currencies[0].name} (${currencies[0].code})`}
    />
  </>
);

export default CountryInfos;
