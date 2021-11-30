import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import { store } from "./store/store";

// ReactDOM.render(<AdminPanel />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
