import GoogleMapReact from "google-map-react";
import React from "react";
import useStyle from "./style";
const Map = () => {
  const classes = useStyle();
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOwB6p-lSBiYshUhQJXgTrjCKIoSsSFmQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        option={""}
        onChange={""}
        onChildClicked={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
