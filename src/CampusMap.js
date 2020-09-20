import React from "react";
import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import Pin from "./Pin";
import { db } from "./services/firebase";
import pinkBeaver from "./assets/pinkBeaver.png";

// Get a reference to the database service
const database = db.ref();
const memsRef = database.child('memories');

function getMemories() {
  var mems = [];
  memsRef.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
      mems.push(child.val())
    });
    return mems;
  });
}

const CampusMap = () => {
  const styles = [
    {
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
        {
          color: "#a592f2",
        },
      ],
    },
    {
      featureType: "landscape",
      stylers: [
        {
          color: "#a592f2",
        },
        {
          lightness: -7,
        },
      ],
    },
    {
      featureType: "road",
      stylers: [
        {
          color: "#e6e6e6",
        },
        {
          lightness: 43,
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          color: "#a592f2",
        },
        {
          lightness: -7,
        },
      ],
    },
    {
      featureType: "water",
      stylers: [
        {
          color: "#81BEF7",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#e6e6e6",
        },
        {
          weight: 1.3,
        },
        {
          visibility: "on",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#e6e6e6",
        },
        {
          visibility: "on",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "poi.park",
      stylers: [
        {
          color: "#7FB069",
        },
        {
          lightness: 32,
        },
      ],
    },
    {
      featureType: "poi.school",
      stylers: [
        {
          color: "#C3B6F6",
        },
      ],
    },
    {
      featureType: "poi.medical",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a592f2",
        },
        {
          lightness: -7,
        },
      ],
    },
    {
      featureType: "poi.sports_complex",
      stylers: [
        {
          color: "#7FB069",
        },
        {
          lightness: 32,
        },
      ],
    },
    {
      featureType: "poi.government",
      stylers: [
        {
          color: "#a592f2",
        },
        {
          lightness: -7,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e6e6e6",
        },
        {
          lightness: -10,
        },
      ],
    },
  ];

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
      options={{ styles: styles }}
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
