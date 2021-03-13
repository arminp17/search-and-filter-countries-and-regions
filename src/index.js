import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import Filter from "./Filter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
