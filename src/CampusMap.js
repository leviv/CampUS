import React from "react";
import { GoogleMap, MarkerClusterer } from "@react-google-maps/api";
import Pin from "./Pin";

const CampusMap = () => {
  const listings = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
  ];
  let testArray = [];
  for (let i = 0; i < listings.length; i++) {
    let location = listings[i];
    testArray.push(
      <Pin position={location} id={i} key={i} clusterer={listings} />
    );
  }

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

  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={{
        height: "100vh",
        width: "100%",
      }}
      // How zoomed in you want the map to start at (always required)
      zoom={17}
      center={{ lat: 42.35898, lng: -71.093489 }}
      // The latitude and longitude to center the map (always required)
      options={{ styles: styles }}
    >
      <MarkerClusterer
        options={{
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          styles: [],
        }}
      >
        {/* {listings} */}
        {(clusterer) =>
          [
            { lat: -31.56391, lng: 147.154312 },
            { lat: -33.718234, lng: 150.363181 },
            { lat: -33.727111, lng: 150.371124 },
            { lat: -33.848588, lng: 151.209834 },
            { lat: -33.851702, lng: 151.216968 },
            { lat: -34.671264, lng: 150.863657 },
            { lat: -35.304724, lng: 148.662905 },
            { lat: -36.817685, lng: 175.699196 },
            { lat: -36.828611, lng: 175.790222 },
            { lat: -37.75, lng: 145.116667 },
            { lat: -37.759859, lng: 145.128708 },
            { lat: -37.765015, lng: 145.133858 },
            { lat: -37.770104, lng: 145.143299 },
            { lat: -37.7737, lng: 145.145187 },
            { lat: -37.774785, lng: 145.137978 },
            { lat: -37.819616, lng: 144.968119 },
            { lat: -38.330766, lng: 144.695692 },
            { lat: -39.927193, lng: 175.053218 },
            { lat: -41.330162, lng: 174.865694 },
            { lat: -42.734358, lng: 147.439506 },
            { lat: -42.734358, lng: 147.501315 },
            { lat: -42.735258, lng: 147.438 },
            { lat: -43.999792, lng: 170.463352 },
          ].map((location, i) => (
            <Pin key={i} position={location} clusterer={clusterer} />
          ))
        }
      </MarkerClusterer>
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
