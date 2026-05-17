import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const projects = [
  { src:'/roofing48.JPEG', title:'Commercial Leak Response', type:'Retail / Office Property', system:'Repair + Water Intrusion Investigation' },
  { src:'/roofing38.JPEG', title:'Flat Roof Restoration', type:'Commercial Building', system:'Low-Slope Roofing + Maintenance Planning' },
  { src:'/roofing37.JPEG', title:'Storm Damage Documentation', type:'Business Property', system:'Hail / Wind Restoration Support' },
  { src:'/roofing33.JPEG', title:'Roof Replacement Planning', type:'Large Residential / Light Commercial', system:'Full Replacement + Ventilation Review' },
  { src:'/roofing31.JPEG', title:'Preventative Maintenance', type:'Property Management', system:'Inspection + Repair Program' },
  { src:'/roofing30.JPEG', title:'Exterior Restoration', type:'Multi-Scope Property', system:'Roofing + Building Envelope Support' },
  { src:'/roofing29.JPEG', title:'System Repair Work', type:'Commercial / Residential', system:'Repair + Photo Documentation' },
  { src:'/roofing28.JPEG', title:'Roof Condition Assessment', type:'Owner / Manager Inspection', system:'Assessment + Scope Planning' },
]

export default function ProjectsGrid() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i) => { setIndex(i); setOpen(true) }
  const close = () => setOpen(false)
  const prev = useCallback(() => setIndex((i) => (i - 1 + projects.length) % projects.length), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % projects.length), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, prev, next])

  const onBackdropClick = (e) => { if (e.target === e.currentTarget) close() }

  return (
    <section className="container-px mx-auto mt-16 md:mt-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="badge">Project Experience</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-4xl">Commercial-ready project presentation.</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">Use this section to frame TRX work as capability-based case studies instead of a basic photo gallery.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <button
            key={project.src}
            className="group overflow-hidden rounded-2xl bg-navy-900 text-left ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400"
            onClick={() => openAt(i)}
            aria-label={`Open ${project.title}`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.src}
                alt={project.title}
                className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.src = '/placeholder-project-1.jpg' }}
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">{project.type}</p>
              <h3 className="mt-2 font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{project.system}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">View detail <ArrowRight size={15}/></span>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
        >
          <button onClick={close} className="absolute right-4 top-4 rounded-lg p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400" aria-label="Close"><X size={24} /></button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400 sm:left-4" aria-label="Previous image"><ChevronLeft size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400 sm:right-4" aria-label="Next image"><ChevronRight size={28} /></button>

          <div className="max-h-[88vh] max-w-[95vw] overflow-hidden rounded-2xl bg-navy-950 ring-1 ring-white/10">
            <img src={projects[index].src} alt={projects[index].title} className="max-h-[70vh] w-full object-contain" />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">{projects[index].type}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{projects[index].title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{projects[index].system}</p>
              <p className="mt-3 text-xs text-neutral-500">{index + 1} / {projects.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
