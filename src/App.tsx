import React, { useState } from "react";
import CampusMap from "./CampusMap";
import Memory from "./Memory";
import "./App.scss";

function App() {
  const [coord, setCoord] = useState({});

  return (
    <div className="App">
      <div className="container">
        <div id="map">
          <CampusMap />
        </div>
        <div id="memories">
          <div className="title">
            <h1>
              Camp<span>US</span>
            </h1>
            <p>Stay connected with your alma mater</p>
          </div>

          <Memory memory={null} />

          <h2>View memories here</h2>

          <footer>
            <p>Made with love by Gloria, Karly, Candace and Levi @ HackMIT</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
