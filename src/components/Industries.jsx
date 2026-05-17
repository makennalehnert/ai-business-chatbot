import { Building2, Factory, Store, Landmark, Home, GraduationCap } from 'lucide-react'

const industries = [
  { icon: Factory, title: 'Industrial Facilities', desc: 'Warehouses, plants, logistics spaces, and production facilities.' },
  { icon: Store, title: 'Retail Centers', desc: 'Standalone stores, plazas, restaurants, and customer-facing properties.' },
  { icon: Home, title: 'Multi-Family Properties', desc: 'Apartments, condos, HOAs, and larger residential communities.' },
  { icon: Building2, title: 'Office Buildings', desc: 'Professional buildings that require clean scheduling and minimal disruption.' },
  { icon: Landmark, title: 'Community Facilities', desc: 'Churches, municipal spaces, and public-use properties.' },
  { icon: GraduationCap, title: 'Education Facilities', desc: 'Schools and campus buildings with safety-first project planning.' },
]

export default function Industries(){
  return (
    <section className="container-px mx-auto mt-16 md:mt-24">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="max-w-3xl">
          <span className="badge">Industries Served</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-4xl">Commercial roofing support for active properties and real business operations.</h2>
          <p className="mt-3 text-neutral-300">From emergency leak response to long-term roof planning, TRX works around tenants, customers, employees, and property schedules.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-navy-900/70 p-5">
              <item.icon className="h-6 w-6 text-gold-300" />
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
