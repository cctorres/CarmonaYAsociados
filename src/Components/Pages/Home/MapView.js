import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import IconSVG from '../../../assets/logo.jpg';
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = [6.2504087, -75.5685272];

  return (
    <div>
      <Map center={position} zoom={20}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
           Ed Coltabaco. <br /> Of. 1012
           <img src={IconSVG}></img>
          </Popup>
        </Marker>
      </Map>
      ,
    </div>
  );
};

export default MapView;
