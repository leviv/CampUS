import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import Pin from "./Pin";
import { db } from "./services/firebase";
import pinkBeaver from "./assets/pinkBeaver.png";
import mapStyles from "./Styles";
import { setConstantValue } from "typescript";

// Get a reference to the database service
const database = db.ref();
const memsRef = database.child('memories');

const CampusMap = () => {
  const initialCoord = { lat: 42.35898, lng: -71.093489 };

  const [markers, setMarkers] = useState([]);

  async function getMemories() {
    var mems = [];
    memsRef.once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        mems.push(child.val())
      });
      console.log("get Memories" + mems)
    }).then(makeMarkers(mems));
  }

  function getLatLongMemories(lat, long) {
    var mems = [];
    memsRef.once("value", function(snapshot) {
      snapshot.forEach(function(child) {
        let mem = child.val();
        if (mem.lat === lat && mem.long === long) {
          mems.push(mem);
        }
      });
      return mems;
    });
  }

  function makeMarkers(memories) {
    let markers = [];
    for (var memory in memories) {
      let coord = { lat: parseFloat(memory["lat"]), lng: parseFloat(memory["long"]) };
      markers.push(<Marker position={coord} icon={pinkBeaver} draggable={true} />);
      console.log("markers" + markers);
    }
    setMarkers(markers);
  }

  // load memories and construct markers
  useEffect(() => { getMemories();}, [initialCoord]);

  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={{
        height: "100vh",
        width: "100%",
      }}
      // How zoomed in you want the map to start at (always required)
      zoom={17}
      center={initialCoord}
      // The latitude and longitude to center the map (always required)
      options={{ styles: mapStyles }}
    >
      {markers.map((marker, index) => (
        { marker }))}
    </GoogleMap>
  );
};

Map.defaultProps = {
  mapContainerStyle: {
    height: "400px",
    width: "800px",
  },
  children: null,
  onLoad: () => { },
  onDragEndFunc: () => { },
  onDragStartFunc: () => { },
  onZoomChangeFunc: () => { },
};

export default CampusMap;
