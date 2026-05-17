// src/components/FAQ.jsx
import { HelpCircle, ShieldCheck, Building2, FileCheck2 } from 'lucide-react'

const sections = [
  {
    icon: HelpCircle,
    heading: '🏠 GENERAL ROOFING QUESTIONS',
    items: [
      {
        q: 'What does TRX specialize in?',
        a: 'We handle everything roofing — from residential shingles to large commercial flat roofs, coatings, and repairs. If it’s a roof, we’re the Xperts.',
      },
      {
        q: 'Do you offer both residential and commercial services?',
        a: 'Yes. TRX serves homeowners, property managers, HOAs, and business owners. We handle everything from small leak repairs to multi-building complexes.',
      },
      {
        q: 'How do I know if I need a new roof or just a repair?',
        a: 'We provide a free inspection and photo documentation, so you can see exactly what’s happening before spending a dollar.',
      },
      {
        q: 'What roofing materials do you work with?',
        a: 'We specialize in shingles, TPO, EPDM, modified bitumen, coatings, metal, and tile systems — built to meet local code and manufacturer specs.',
      },
      {
        q: 'How long does a typical roofing job take?',
        a: 'Residential projects usually take 1–3 days; larger commercial jobs vary depending on roof size and structure. We’ll always give you a clear timeline up front.',
      },
    ],
  },
  {
    icon: FileCheck2,
    heading: '⚡ INSURANCE & CLAIMS',
    items: [
      {
        q: 'Do you help with insurance claims?',
        a: 'Absolutely. Our team includes licensed public adjusters who can guide you through the process to make sure you get the coverage you deserve.',
      },
      {
        q: 'What if my insurance company denies my claim?',
        a: 'We can review your policy, document code upgrades, and file a proper supplement or re-inspection to fight for full approval.',
      },
      {
        q: 'Will filing a claim raise my insurance rate?',
        a: 'Not typically — storm damage claims are considered “no-fault.” We’ll help you navigate the process safely and strategically.',
      },
    ],
  },
  {
    icon: Building2,
    heading: '💪 COMMERCIAL CLIENTS',
    items: [
      {
        q: 'Do you work with property managers or multi-unit buildings?',
        a: 'Yes. We specialize in apartment complexes, condos, warehouses, and retail buildings — including maintenance programs and roof coatings.',
      },
      {
        q: 'Can you work around tenants or business hours?',
        a: 'Yes. We plan our projects around your schedule to minimize disruption while keeping the job OSHA-compliant and on time.',
      },
      {
        q: 'Do you offer maintenance or service programs?',
        a: 'We offer customizable maintenance plans for commercial properties to extend roof life and prevent costly repairs.',
      },
    ],
  },
  {
    icon: ShieldCheck,
    heading: '🧾 QUALITY & WARRANTY',
    items: [
      {
        q: 'Are your roofs backed by a warranty?',
        a: 'Every TRX roof includes a workmanship warranty, plus manufacturer coverage for materials — giving you total peace of mind.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes. TRX is fully licensed, bonded, and insured in Illinois for both residential and commercial roofing.',
      },
      {
        q: 'What makes TRX different from other roofers?',
        a: 'We combine precision craftsmanship, industry knowledge, and honest communication. We don’t guess — we Xpert.',
      },
    ],
  },
]

export default function FAQ(){
  return (
    <section className="container-px mx-auto mt-16 md:mt-24">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">FAQ</h2>

      <div className="mt-6 grid gap-8">
        {sections.map((section, si) => (
          <div key={si} className="space-y-4">
            <div className="flex items-center gap-2">
              <section.icon className="h-5 w-5 text-gold-300" />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
                {section.heading}
              </h3>
            </div>

            <div className="grid gap-3">
              {section.items.map((f, i) => (
                <details key={i} className="card p-5">
                  <summary className="cursor-pointer font-semibold text-white">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-neutral-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
