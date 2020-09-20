import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import pinkBeaver from "./assets/pinkBeaver.png";
import mapStyles from "./Styles";

const CampusMap = () => {
  const initialCoord = { lat: 42.35898, lng: -71.093489 };

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
      <Marker position={initialCoord} icon={pinkBeaver} draggable={true} />
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
