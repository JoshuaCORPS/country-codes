import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Country from "./containers/Country/Country";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/:cc" component={Country} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default App;
