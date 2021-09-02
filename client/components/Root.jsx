import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Animals from "./animals";
import ListProjects from "./listProjects";

import "./root.scss";
import Categories from "./Dropdown/categories";

const Root = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/animals">
            <Animals />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/projects">
            <ListProjects />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Root;
