import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import RoomIcon from "@material-ui/icons/Room";
import CountryInfo from "../../components/CountryInfos/CountryInfo/CountryInfo";

const countryInfo = {
  Icon: RoomIcon,
  title: "Continent",
  value: "Kabul",
};

describe("<CountryInfo />", () => {
  it("mounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CountryInfo
        Icon={RoomIcon}
        title={countryInfo.title}
        value={countryInfo.value}
      />,
      div
    );
  });

  it("unmounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CountryInfo
        Icon={RoomIcon}
        title={countryInfo.title}
        value={countryInfo.value}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("passing props to component", () => {
    const wrapper = mount(
      <CountryInfo
        Icon={RoomIcon}
        title={countryInfo.title}
        value={countryInfo.value}
      />
    );
    expect(wrapper.props()).toEqual({ ...countryInfo });
  });

  it("check Icon if exist", () => {
    const wrapper = shallow(
      <CountryInfo
        Icon={RoomIcon}
        title={countryInfo.title}
        value={countryInfo.value}
      />
    );
    const value = wrapper.find("#icon").text();
    expect(value).not.toBeNull();
  });

  it("check title if exist", () => {
    const wrapper = shallow(
      <CountryInfo
        Icon={RoomIcon}
        title={countryInfo.title}
        value={countryInfo.value}
      />
    );
    const value = wrapper.find("#title").text();
    expect(value).toEqual("Continent");
  });

  it("check value if exist", () => {
    const wrapper = shallow(
      <CountryInfo
        Icon={RoomIcon}
        title={countryInfo.title}
        value={countryInfo.value}
      />
    );
    const value = wrapper.find("#value").text();
    expect(value).toEqual("Kabul");
  });
});
