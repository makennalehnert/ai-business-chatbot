import { ShieldCheck, HardHat, Building2, ClipboardCheck } from 'lucide-react'

const features = [
  { icon: Building2, title: 'Commercial Property Focus', desc: 'Roofing support for retail, office, industrial, multi-family, and facility portfolios.'},
  { icon: ClipboardCheck, title: 'Maintenance Programs', desc: 'Scheduled inspections and documentation to extend roof life and prevent costly surprises.'},
  { icon: HardHat, title: 'Safety-Minded Crews', desc: 'Professional jobsite planning built around active businesses, tenants, and daily operations.'},
  { icon: ShieldCheck, title: 'Storm & Insurance Support', desc: 'Detailed photo documentation and guidance for hail, wind, and restoration-related claims.'},
]

export default function Features(){
  return (
    <section className="container-px mx-auto mt-16 md:mt-24">
      <div className="grid gap-6 md:grid-cols-4">
        {features.map((f,i)=>(
          <div key={i} className="card p-6 transition duration-300 hover:-translate-y-1 hover:bg-navy-900">
            <f.icon className="h-6 w-6 text-gold-300" />
            <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
