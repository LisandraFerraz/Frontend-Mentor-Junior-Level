import "./styles.css";
import React from "react";
import { LocalDetailsCard } from "./components/local-details-card";
import seach_btn_img from "./assets/icons/icon-arrow.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import localmark from "./assets/icons/icon-location.svg";
import { useState } from "react";

function App() {
  const url =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_l7U1E8uBWMd8MW69BTH2u2SrtmbC0&ipAddress=";

  const [ipAdress, setIpAdress] = useState<any>();
  const [result, setResult] = useState<any>();
  const [geoLocation, setGeoLocation] = useState<any>();

  const boom = Math.random();

  async function searchLocation() {
    const res = await fetch(url + ipAdress);
    const data = await res.json();

    const caughtIp = {
      region: `${data.location.region}, ${data.location.country}`,
      timezone: data.location.timezone,
      ip: data.ip,
      isp: data.isp,
    };

    const getGeoLocation = {
      lat: data.location.lat,
      lng: data.location.lng,
    };

    setGeoLocation(() => [getGeoLocation]);
    setResult(() => [caughtIp]);

    console.log(getGeoLocation.lat);
  }

  return (
    <div className="page-container">
      <div className="search-section">
        <h1>IP Adress Tracker</h1>
        <div className="search-container">
          <input
            onChange={(i) => setIpAdress(i.target.value)}
            type="text"
            placeholder="Search for any IP adress or domain"
          />
          <button onClick={searchLocation}>
            <img src={seach_btn_img} alt="" />
          </button>
        </div>
      </div>

      {result ? (
        result.map((r: any) => (
          <LocalDetailsCard
            key={r.ip}
            ip_adrees={r.ip}
            location={r.region}
            timezone={r.timezone}
            isp={r.isp}
          />
        ))
      ) : (
        <LocalDetailsCard
          key={boom}
          ip_adrees=""
          location=""
          timezone=""
          isp=""
        />
      )}

      {geoLocation ? (
        geoLocation.map((r: any) => (
          <MapContainer
            center={[r.lat, r.lng]}
            zoom={100}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[r.lat, r.lng]}
              s
              icon={
                new Icon({
                  iconUrl: localmark,
                  iconSize: [33, 41],
                  iconAnchor: [12, 41],
                })
              }
            />
          </MapContainer>
        ))
      ) : (
        <div>
          <p>Nothing to see here.</p>;
        </div>
      )}
    </div>
  );
}

export default App;