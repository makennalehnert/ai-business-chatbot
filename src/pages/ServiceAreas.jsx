import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Center: Melrose Park, IL
const CENTER = [41.9009, -87.8567]
// 100 miles ≈ 160,934 meters
const RADIUS_METERS = 160_934

export default function ServiceAreas() {
  return (
    <div>
      <Header />

      <div className="container-px mx-auto mt-10">
        <h1 className="text-3xl font-bold tracking-tight text-white">Service Area</h1>
        <p className="mt-2 text-neutral-300 max-w-2xl">
          We proudly serve homeowners and businesses within roughly
          <span className="font-semibold text-white"> 100 miles of Melrose Park, IL</span>.
          The circle on the map shows our core coverage.
        </p>

        {/* Map card */}
        <div className="card mt-6 overflow-hidden">
          <div className="h-[60vh] md:h-[70vh]">
            <MapContainer
              center={CENTER}
              zoom={8}
              scrollWheelZoom={false}
              className="h-full w-full"
              attributionControl={false}
            >
              {/* Free OpenStreetMap tiles */}
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {/* Coverage circle (100 miles) */}
              <Circle
                center={CENTER}
                radius={RADIUS_METERS}
                pathOptions={{
                  color: '#EAB308',       // gold stroke
                  weight: 2,
                  fillColor: '#EAB308',
                  fillOpacity: 0.16,
                }}
              />

              {/* Center marker */}
              <Marker position={CENTER}>
                <Popup>Melrose Park, IL — TRX Service Center</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <p className="mt-4 text-xs text-neutral-400">
          Map is approximate for planning; final availability depends on project scope and scheduling.
        </p>
      </div>

      <Footer />
    </div>
  )
}
