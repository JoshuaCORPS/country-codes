import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import CountryInfos from "../../components/CountryInfos/CountryInfos";

const countryInfo = {
  region: "Asia",
  capital: "Kabul",
  population: 27657145,
  currencies: [
    {
      code: "AFN",
      name: "Afghan afghani",
      symbol: "؋",
    },
  ],
};

describe("<CountryInfos />", () => {
  it("mounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CountryInfos
        region={countryInfo.region}
        capital={countryInfo.capital}
        population={countryInfo.population}
        currencies={countryInfo.currencies}
      />,
      div
    );
  });

  it("unmounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CountryInfos
        region={countryInfo.region}
        capital={countryInfo.capital}
        population={countryInfo.population}
        currencies={countryInfo.currencies}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("passing props to component", () => {
    const wrapper = mount(
      <CountryInfos
        region={countryInfo.region}
        capital={countryInfo.capital}
        population={countryInfo.population}
        currencies={countryInfo.currencies}
      />
    );
    expect(wrapper.props()).toEqual({ ...countryInfo });
  });
});
