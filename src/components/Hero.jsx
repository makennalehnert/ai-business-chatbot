import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building2, ShieldCheck, Clock3 } from 'lucide-react'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/mainroofing.JPG"
          alt="Commercial roofing project"
          className="h-full min-h-[760px] w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      <div className="container-px mx-auto grid min-h-[calc(100vh-76px)] items-center gap-10 py-20 text-white lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.span
            initial={{opacity:0, y:10}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.1}}
            className="badge"
          >
            Commercial Roofing • Restoration • Maintenance
          </motion.span>

          <motion.h1
            initial={{opacity:0, y:10}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.2}}
            className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            Commercial roofing solutions built to protect your property long-term.
          </motion.h1>

          <motion.p
            initial={{opacity:0, y:10}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.3}}
            className="mt-5 max-w-2xl text-lg leading-8 text-neutral-200"
          >
            TRX helps building owners, property managers, and businesses with roof replacements, leak response, storm restoration, coatings, and preventative maintenance programs.
          </motion.p>

          <motion.div
            initial={{opacity:0, y:10}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.35}}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link to="/contact" className="btn-primary">Request Commercial Inspection</Link>
            <Link to="/projects" className="btn-outline">View Project Work</Link>
          </motion.div>

          <motion.div
            initial={{opacity:0, y:10}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.45}}
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            {[
              {icon: Building2, label: 'Commercial & Multi-Family'},
              {icon: ShieldCheck, label: 'Licensed & Insured'},
              {icon: Clock3, label: 'Emergency Leak Response'},
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <item.icon className="h-5 w-5 text-gold-300" />
                <p className="mt-3 text-sm font-semibold text-white">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{opacity:0, scale:.98}}
          animate={{opacity:1, scale:1}}
          transition={{delay:0.35}}
          className="hidden rounded-[2rem] border border-white/10 bg-navy-900/70 p-6 shadow-soft backdrop-blur lg:block"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">Commercial Capabilities</p>
          <div className="mt-6 space-y-4">
            {[
              ['Roof Systems', 'TPO, EPDM, PVC, coatings, metal, and modified bitumen.'],
              ['Property Types', 'Industrial, retail, office, multi-family, and facility portfolios.'],
              ['Maintenance', 'Inspection programs designed to extend roof life and reduce emergency costs.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-300">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
