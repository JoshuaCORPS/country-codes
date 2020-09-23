import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import CountryFlag from "../../components/CountryInfos/CountryFlag/CountryFlag";

const flagInfo = {
  name: "Afganistan",
  flag: "https://restcountries.eu/data/afg.svg",
};

describe("<CountryFlag />", () => {
  it("mounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CountryFlag flag={flagInfo.flag} name={flagInfo.name} />,
      div
    );
  });

  it("unmounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CountryFlag flag={flagInfo.flag} name={flagInfo.name} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("passing props to component", () => {
    const wrapper = mount(
      <CountryFlag flag={flagInfo.flag} name={flagInfo.name} />
    );
    expect(wrapper.props()).toEqual({ ...flagInfo });
  });
});
