import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

function Map() {
    const [location, setLocation] = useState([20.5937, 78.9629]); // Default: India

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation([position.coords.latitude, position.coords.longitude]);
            },
            (error) => {
                console.error("Error fetching location:", error);
            }
        );
    }, []);

    return (
        <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={location}>
                <Popup>Your Current Location</Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
