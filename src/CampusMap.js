import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import Pin from "./Pin";
import { db } from "./services/firebase";
import pinkBeaver from "./assets/pinkBeaver.png";
import blueBeaver from "./assets/blueBeaver.png";
import mapStyles from "./Styles";
import { setConstantValue } from "typescript";

// Get a reference to the database service
const database = db.ref();
const memsRef = database.child("memories");

const CampusMap = (props) => {
  const initialCoord = props.coord;

  const [markers, setMarkers] = useState([]);

  async function getMemories() {
    var markers = [];
    memsRef
      .once("value", function (snapshot) {
        snapshot.forEach(function (child) {
          let memory = child.val();
          let coord = {
            lat: parseFloat(memory["lat"]),
            lng: parseFloat(memory["long"]),
          };
          if (!(memory.lat === 42.35898 && memory.lng !== -71.093489)) {
            markers.push(
              <Marker
                position={coord}
                icon={pinkBeaver}
                draggable={false}
                onClick={(e) => {
                  getLatLongMemories(e.latLng.lat(), e.latLng.lng());
                }}
              />
            );
          }
        });
      })
      .then(() => {
        setMarkers(markers);
      });
  }

  function getLatLongMemories(lat, long) {
    console.log(lat);
    console.log(long);
    var mems = [];
    memsRef.once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        let mem = child.val();
        if (mem.lat === lat && mem.long === long) {
          mems.push(mem);
        }
      });
      props.onMarkerClick(mems);
      return mems;
    });
  }

  // load memories and construct markers
  useEffect(() => {
    getMemories();
  }, []);

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
        <div key={index}>{marker}</div>
      ))}
      <Marker
        position={initialCoord}
        icon={blueBeaver}
        draggable={true}
        onDragEnd={(e) => {
          props.onMarkerMove(e.latLng.lat(), e.latLng.lng());
        }}
      />
    </GoogleMap>
  );
};

Map.defaultProps = {
  mapContainerStyle: {
    height: "400px",
    width: "800px",
  },
  children: null,
  onLoad: () => {},
  onDragEndFunc: () => {},
  onDragStartFunc: () => {},
  onZoomChangeFunc: () => {},
};

export default CampusMap;
