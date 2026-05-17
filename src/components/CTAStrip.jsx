import { Phone, Mail } from 'lucide-react'

export default function CTAStrip(){
  return (
    <div className="sticky bottom-0 z-40 border-t border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="container-px mx-auto flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-white">Need commercial roof help? Request an inspection or emergency response.</p>
        <div className="flex gap-2">
          <a href="tel:+17739934339" className="btn-primary gap-2"><Phone size={18}/> Call</a>
          <a href="mailto:theroofxpertsco@gmail.com" className="btn-outline gap-2"><Mail size={18}/> Email</a>
        </div>
      </div>
    </div>
  )
}
