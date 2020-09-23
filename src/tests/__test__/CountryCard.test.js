import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import CountryCard from "../../components/CountryCard/CountryCard";

const country = {
  name: "Afghanistan",
  alpha2Code: "AF",
  callingCodes: ["93"],
  flag: "https://restcountries.eu/data/afg.svg",
  region: "Asia",
  timezones: ["UTC+04:30"],
};

describe("<Country Card />", () => {
  it("mounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CountryCard country={country} />, div);
  });

  it("unmounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CountryCard country={country} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("passing props to component", () => {
    const wrapper = mount(<CountryCard country={country} />);
    expect(wrapper.props().country).toEqual(country);
  });

  it("check countryname if exist", () => {
    const wrapper = shallow(<CountryCard country={country} />).dive();
    const value = wrapper.find("#countryname").text();
    expect(value).toEqual("Afghanistan (AF)");
  });

  it("check region if exist", () => {
    const wrapper = shallow(<CountryCard country={country} />).dive();
    const value = wrapper.find("#region").text();
    expect(value).toEqual("Asia");
  });

  it("check timezone if exist", () => {
    const wrapper = shallow(<CountryCard country={country} />).dive();
    const value = wrapper.find("#timezone").text();
    expect(value).toEqual("UTC+04:30");
  });

  it("check callingcode if exist", () => {
    const wrapper = shallow(<CountryCard country={country} />).dive();
    const value = wrapper.find("#callingcode").text();
    expect(value).toEqual("+ 93");
  });
});
