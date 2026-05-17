import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Minimal data for detail view (no JSX here)
const AREAS = [
  { slug: 'melrose-park-il', city: 'Melrose Park', state: 'IL', lat: 41.9009, lng: -87.8567 },
  { slug: 'chicago-il', city: 'Chicago', state: 'IL', lat: 41.8781, lng: -87.6298 },
  { slug: 'rockford-il', city: 'Rockford', state: 'IL', lat: 42.2711, lng: -89.0937 },
  { slug: 'aurora-il', city: 'Aurora', state: 'IL', lat: 41.7606, lng: -88.3201 },
  { slug: 'joliet-il', city: 'Joliet', state: 'IL', lat: 41.5250, lng: -88.0817 },
  { slug: 'kenosha-wi', city: 'Kenosha', state: 'WI', lat: 42.5847, lng: -87.8212 },
]

// 100 miles ≈ 160,934 meters
const RADIUS_METERS = 160_934
const CENTER = [41.9009, -87.8567] // Melrose Park, IL

export default function ServiceAreaDetail() {
  const { slug } = useParams()
  const area = AREAS.find(a => a.slug === slug)

  return (
    <div>
      <Header />

      <div className="container-px mx-auto mt-10">
        <nav className="text-sm text-neutral-400">
          <Link to="/">Home</Link> / <Link to="/service-areas">Service Areas</Link>
          {area ? <> / <span className="text-neutral-200">{area.city}, {area.state}</span></> : null}
        </nav>

        {!area ? (
          <div className="mt-8">
            <p className="text-neutral-300">Area not found.</p>
          </div>
        ) : (
          <>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Roofing in {area.city}, {area.state}
            </h1>
            <p className="mt-2 text-neutral-300 max-w-2xl">
              This city is within our normal service radius. If you’re nearby, we can likely help too.
            </p>

            {/* Map focused on the chosen city, with the 100-mile service circle visible */}
            <div className="card mt-6 overflow-hidden">
              <div className="h-[55vh]">
                <MapContainer
                  center={[area.lat, area.lng]}
                  zoom={10}
                  scrollWheelZoom={false}
                  className="h-full w-full"
                  attributionControl={false}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  {/* Global service radius (centered on Melrose Park) */}
                  <Circle
                    center={CENTER}
                    radius={RADIUS_METERS}
                    pathOptions={{ color: '#EAB308', weight: 2, fillColor: '#EAB308', fillOpacity: 0.12 }}
                  />

                  {/* City marker */}
                  <Marker position={[area.lat, area.lng]}>
                    <Popup>{area.city}, {area.state}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            <div className="mt-6">
              <a href="tel:+18152893393" className="btn-primary">Schedule Free Inspection</a>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}
