import React from "react";
import CampusMap from "./CampusMap";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>
          Camp<span>US</span>
        </h1>
        <p>Stay connected with your alma mater</p>
      </div>

      <div className="container">
        <div id="map">
          <CampusMap />
        </div>
        <div id="stories">
          <h2>View stories here</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
