import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import Table from "../../components/Table/Table";

const tableInfo = {
  date: "Wed Sep 23 2020",
  time: "7:26:43 AM",
  timezone: "UTC+04:30",
  callingCode: "93",
};

describe("<Table />", () => {
  it("mounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Table
        date={tableInfo.date}
        time={tableInfo.time}
        timezone={tableInfo.timezone}
        callingCode={tableInfo.callingCode}
      />,
      div
    );
  });

  it("unmounting component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Table
        date={tableInfo.date}
        time={tableInfo.time}
        timezone={tableInfo.timezone}
        callingCode={tableInfo.callingCode}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("passing props to component", () => {
    const wrapper = mount(
      <Table
        date={tableInfo.date}
        time={tableInfo.time}
        timezone={tableInfo.timezone}
        callingCode={tableInfo.callingCode}
      />
    );
    expect(wrapper.props()).toEqual({ ...tableInfo });
  });

  it("check date if exist", () => {
    const wrapper = shallow(
      <Table
        date={tableInfo.date}
        time={tableInfo.time}
        timezone={tableInfo.timezone}
        callingCode={tableInfo.callingCode}
      />
    );
    const value = wrapper.find("#date").text();
    expect(value).toEqual("Wed Sep 23 2020");
  });

  it("check time if exist", () => {
    const wrapper = shallow(
      <Table
        date={tableInfo.date}
        time={tableInfo.time}
        timezone={tableInfo.timezone}
        callingCode={tableInfo.callingCode}
      />
    );
    const value = wrapper.find("#time").text();
    expect(value).toEqual("7:26:43 AM");
  });

  it("check time if exist", () => {
    const wrapper = shallow(
      <Table
        date={tableInfo.date}
        time={tableInfo.time}
        timezone={tableInfo.timezone}
        callingCode={tableInfo.callingCode}
      />
    );
    const value = wrapper.find("#time").text();
    expect(value).toEqual("7:26:43 AM");
  });

  it("check timezone if exist", () => {
    const wrapper = shallow(
      <Table
        date={tableInfo.date}
        time={tableInfo.time}
        timezone={tableInfo.timezone}
        callingCode={tableInfo.callingCode}
      />
    );
    const value = wrapper.find("#timezone").text();
    expect(value).toEqual("UTC+04:30");
  });

  it("check callingCode if exist", () => {
    const wrapper = shallow(
      <Table
        date={tableInfo.date}
        time={tableInfo.time}
        timezone={tableInfo.timezone}
        callingCode={tableInfo.callingCode}
      />
    );
    const value = wrapper.find("#callingcode").text();
    expect(value).toEqual("+ 93");
  });
});
