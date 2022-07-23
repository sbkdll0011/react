/*const react = require("react");
const reactDOM = require("react-dom");

reactDOM.render(<h1>Merhaba React</h1>, 
  document.getElementById("root"));*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
const ahmet = ReactDOM.createRoot(document.getElementById("root"));

let lastName = "Keleş";
let name = "Salih";

ahmet.render(
  <div>
    <h1 className="head">Hello React!</h1>
    <p>Welcome {name}</p>
    <p>{`${name} ${lastName}`}</p>
    <p>{document.getElementById("a").innerText}</p>
    <p>{Math.floor(Math.random() * 100) + 1}</p>
  </div>
);
