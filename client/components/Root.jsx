import React from "react";
import store from "../redux";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import history from "./../redux/history";

import App from "./App";
import ItemNews from "./itemNews";

import "./root.scss";

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/news">
              <App />
            </Route>
            <Route exact path="/news/:id">
              <ItemNews />
            </Route>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
