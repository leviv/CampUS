import React, { useState } from "react";
import CampusMap from "./CampusMap";
import Memory from "./Memory";
import MemoryForm from "./MemoryForm";
import "./App.scss";

function App() {
  const [coord, setCoord] = useState({ lat: 42.35898, lng: -71.093489 });
  const [mems, setMems] = useState([]);

  const onMarkerMove = (lat, lng) => {
    setCoord({ lat: lat, lng: lng });
  };

  const onMarkerClick = (data) => {
    setMems(data);
    console.log(data);
  };

  return (
    <div className="App">
      <div className="container">
        <div id="map">
          <CampusMap
            coord={coord}
            onMarkerMove={onMarkerMove}
            onMarkerClick={onMarkerClick}
          />
        </div>
        <div id="memories">
          <div className="title">
            <h1>
              Camp<span>us</span>
            </h1>
            <p>People make a college campus</p>
          </div>

          <h2>Click a pin to View memories</h2>

          {mems.map((mem, index) => (
            <Memory
              title={mem.title}
              attribution={mem.attribution}
              image={mem.image}
              description={mem.description}
            />
          ))}

          <MemoryForm coord={coord} />

          <footer>
            <p>Made with love by Gloria, Karly, Candace and Levi @ HackMIT</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
