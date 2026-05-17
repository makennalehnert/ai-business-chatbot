import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'

export default function Header(){
  const [open, setOpen] = useState(false)

  const nav = [
    {to:'/services', label:'Solutions'},
    {to:'/service-areas', label:'Service Areas'},
    {to:'/projects', label:'Projects'},
    {to:'/residential', label:'Residential'},
    {to:'/about', label:'About'},
    {to:'/contact', label:'Contact'}
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy-950/90 backdrop-blur-xl">
      <div className="container-px mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
          <img
            src="/trxlogo.PNG"
            alt="The Roof Xperts"
            className="h-10 w-10 object-contain"
            decoding="async"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-white">The Roof Xperts</span>
            <span className="text-xs text-neutral-300">Commercial • Residential • Restoration</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive}) =>
              `text-sm font-medium transition ${isActive?'text-gold-300':'text-neutral-200 hover:text-gold-300'}`}>
              {n.label}
            </NavLink>
          ))}
          <a href="tel:+17739934339" className="btn-primary gap-2 whitespace-nowrap">
            <Phone size={18}/> 24/7 Response
          </a>
        </nav>

        <button
          className="lg:hidden rounded-xl p-2 text-neutral-200 ring-1 ring-white/15"
          onClick={()=>setOpen(v=>!v)}
          aria-label="Toggle menu"
        >
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-950/95">
          <div className="container-px mx-auto flex flex-col gap-2 py-3">
            {nav.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={()=>setOpen(false)}
                className="rounded-lg px-2 py-2 text-neutral-200 hover:bg-white/10"
              >
                {n.label}
              </NavLink>
            ))}
            <a href="tel:+17739934339" className="btn-primary gap-2">
              <Phone size={18}/> 24/7 Response
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
