import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./MainPage";
import * as serviceWorker from "./serviceWorker";

import { injectGlobal } from "emotion";

injectGlobal({
  html: {
    height: "100%",
    width: "100%"
  },
  body: {
    height: "100%",
    width: "100%",
      background: "#f3e5f5"
  }
});

// Obtain the BACKEND_SERVER_URL from environment variables
const backendUrl = process.env.REACT_APP_BACKEND_SERVER_URL;

// Pass the backendUrl as a prop to the App component
ReactDOM.render(<App backendUrl={backendUrl} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
