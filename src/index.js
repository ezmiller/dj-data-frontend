import React from "react";
import ReactDOM from "react-dom";
import map from "lodash/map";
import ReactJson from "react-json-view";

import sampleData from "./sampleBuilding";

import "./styles.css";

const sampleJson = {
  a: {
    a1: "a1",
    a2: {
      a21: "a21"
    }
  },
  b: "b"
};

function App() {
  return (
    <div className="App">
      <ReactJson src={sampleData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
