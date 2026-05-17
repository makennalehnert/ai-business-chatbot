import { Link } from 'react-router-dom'

const services = [
  { title:'TPO & Flat Roofing', blurb:'Energy-efficient commercial roof systems for warehouses, offices, retail centers, and low-slope buildings.', img:'/roofing33.JPEG' },
  { title:'Emergency Leak Response', blurb:'Fast inspection, temporary protection, and repair planning to reduce interior damage and downtime.', img:'/roofing48.JPEG' },
  { title:'Storm Restoration', blurb:'Hail and wind documentation, restoration planning, and claim support for commercial properties.', img:'/roofing37.JPEG' },
  { title:'Preventative Maintenance', blurb:'Scheduled roof inspections, condition reports, repairs, and lifecycle planning for property owners.', img:'/roofing31.JPEG' },
]

const systems = ['TPO', 'EPDM', 'PVC', 'Metal', 'Coatings', 'Modified Bitumen']

export default function ServicesGrid({cta=true}){
  return (
    <section className="container-px mx-auto mt-16 md:mt-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="badge">Commercial Roofing Solutions</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-4xl">Built for larger properties, tighter timelines, and long-term performance.</h2>
          <p className="mt-3 max-w-3xl text-neutral-300">TRX supports commercial roof replacements, repairs, storm restoration, coatings, and maintenance programs for property managers and business owners.</p>
        </div>
        {cta && <Link to="/services" className="text-sm font-semibold text-gold-300 hover:underline">Explore all solutions →</Link>}
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {systems.map((system) => (
          <span key={system} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-200">{system}</span>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s,i)=>(
          <div key={i} className="group card overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img src={s.img} alt="" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"/>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{s.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
