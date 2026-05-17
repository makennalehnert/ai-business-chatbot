import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Building2, ShieldCheck, ClipboardCheck, Clock3 } from 'lucide-react'

const points = [
  { icon: Building2, title: 'Commercial-first capability', desc: 'TRX is positioned to support business owners, property managers, and larger buildings with reliable roofing solutions.' },
  { icon: ClipboardCheck, title: 'Clear documentation', desc: 'Photo documentation, condition notes, and repair scopes help owners make confident decisions.' },
  { icon: Clock3, title: 'Responsive service', desc: 'Emergency leak response and inspection scheduling for active properties.' },
  { icon: ShieldCheck, title: 'Licensed and insured', desc: 'Professional crews focused on quality, safety, and long-term roof performance.' },
]

export default function About(){
  return (
    <div>
      <Header/>
      <div className="container-px mx-auto mt-10 max-w-5xl">
        <span className="badge">About TRX</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">A roofing partner for properties that need dependable protection.</h1>
        <p className="mt-5 max-w-3xl text-neutral-300">The Roof Xperts combines craftsmanship, communication, and practical roofing knowledge to help owners protect their buildings. From commercial roof systems to residential restoration, our goal is simple: clear guidance, durable work, and a smoother process from inspection to completion.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="card p-6">
              <point.icon className="h-6 w-6 text-gold-300" />
              <h3 className="mt-4 font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
