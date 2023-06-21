import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import "./css/general.css";
import Homepage from "./homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
