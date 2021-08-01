import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import IconSVG from '../../../assets/logo.jpg';
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import './MapView.css'

const MapView = () => {
  const position = [6.2505314, -75.5707974];

  return (
    <div className="map-view-container">
      <Map center={position} zoom={15}>
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
           Ed Inversiones e Industria. <br /> Of. 1202 - 1204 <br /> Calle 51 # 51 - 31
           <img className="pop-up-img" src={IconSVG} alt="Carmona-Asociados"></img>
          </Popup>
        </Marker>
      </Map>
      ,
    </div>
  );
};

export default MapView;
