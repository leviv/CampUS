import React from "react";
import CampusMap from "./CampusMap";
import Memory from "./Memory";
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
        <div id="memories">
          <h2>View memories here</h2>
          <Memory memory={null} />
        </div>
      </div>
    </div>
  );
}

export default App;
