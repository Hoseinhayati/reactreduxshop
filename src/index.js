import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureDefaultSetting } from "./Store/configureStore";
import { saveState } from "./Store/localStorage";
import { Provider } from "react-redux";

 
const store = configureDefaultSetting();

 
store.subscribe(() =>
  saveState("shoppingCart", store.getState()["shoppingCart"])
);

 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();