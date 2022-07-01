import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import Detail from "./pages/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route index element={<App />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
