import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import "./main.scss";
import Root from "./components/Root";

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById("root")
);
