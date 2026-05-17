import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10 bg-navy-950">
      <div className="container-px mx-auto grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/trxlogo.PNG" alt="The Roof Xperts logo" className="h-10 w-10 object-contain" width={40} height={40} loading="lazy" decoding="async" />
            <div className="text-lg font-bold text-white">The Roof Xperts</div>
          </div>
          <p className="mt-4 text-sm text-neutral-300">Commercial • Residential • Restoration</p>
          <p className="mt-1 text-sm text-neutral-300">Roofing solutions for properties that need long-term protection.</p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="text-neutral-300 hover:text-gold-300">About</Link></li>
            <li><Link to="/projects" className="text-neutral-300 hover:text-gold-300">Projects</Link></li>
            <li><Link to="/service-areas" className="text-neutral-300 hover:text-gold-300">Service Areas</Link></li>
            <li><Link to="/contact" className="text-neutral-300 hover:text-gold-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Commercial Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>TPO / EPDM / Flat Roofing</li>
            <li>Emergency Leak Response</li>
            <li>Preventative Maintenance</li>
            <li>Storm Restoration</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Get in touch</h4>
          <p className="mt-3 text-sm text-neutral-300">Phone: (773) 993-4339</p>
          <p className="text-sm text-neutral-300">Email: theroofxpertsco@gmail.com</p>
          <p className="mt-4 text-xs text-neutral-400">© {new Date().getFullYear()} The Roof Xperts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
