import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProducerPage } from "../pages";

const RouterContainer = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ProducerPage} title="" />
        {/* <Route path="*" title="Not Found" /> */}
      </Switch>
    </div>
  );
};

export default RouterContainer;
