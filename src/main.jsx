import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//Redux
import { Provider } from "react-redux";
import store from "./store";
//Router
//es un enrutador porque //react simula una single page aplication */}
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>                 
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
