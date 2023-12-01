
import { useEffect } from 'react';
import L from 'leaflet'
export default function LeafletMap() {
    console.log('test')
    useEffect(() => {
        // Create a map instance and specify the ID of the div element where you want the map
        const map = L.map('leaflet-map').setView([51.505, -0.09], 13);

        // Add a marker at the specified coordinates
        L.marker([51.505, -0.09])
            .addTo(map)
            .bindPopup('A simple Leaflet map!') // Add a popup to the marker
            .openPopup(); // Open the popup by default

    }, []);
    return (
        <div>
            <div id="leaflet-map" style={{ height: '400px' }}></div>
        </div>
    )
}