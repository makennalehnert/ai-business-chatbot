import { useEffect, useRef, useCallback } from 'react'
import { X, Leaf, ShieldCheck } from 'lucide-react'

/**
 * SeasonalPopup
 * Props:
 *  - open: boolean
 *  - onClose: () => void
 *  - image?: string  (default: "/cloggedgutter.jpg")
 *  - title?: string
 */
export default function SeasonalPopup({
  open,
  onClose,
  image = '/cloggedgutter.jpg',
  title = 'Fall Leaf Clean-Up & Gutter Cleaning',
}) {
  const closeBtnRef = useRef(null)

  // Close on ESC
  const onKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onKey)
    closeBtnRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onKey])

  if (!open) return null

  // Click outside closes
  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const goToContact = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = encodeURIComponent(form.get('name') || '')
    const phone = encodeURIComponent(form.get('phone') || '')
    const qp = `?service=gutter-cleaning&name=${name}&phone=${phone}`
    window.location.href = `/contact${qp}`
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fall-popup-title"
      onClick={onBackdropClick}
    >
      {/* Dim the site behind, but keep it visible */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      {/* The modal box with your photo as the background */}
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Soft overlay on top of the photo for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" aria-hidden="true" />
        {/* Warm accent for fall vibe (very subtle) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" aria-hidden="true" />

        {/* Content */}
        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between p-5">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-orange-300" />
              <h2 id="fall-popup-title" className="text-lg font-bold text-white">
                {title}
              </h2>
            </div>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close popup"
              className="rounded-md p-2 text-neutral-200 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-brand-600"
            >
              <X />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 pb-5 space-y-4">
            <p className="text-sm text-neutral-100">
              Keep water flowing and your fascia protected before winter hits.
            </p>
            <ul className="text-sm text-neutral-100 space-y-2">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Debris removal & downspout flush
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Photo proof of before/after
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Priority scheduling this week
              </li>
            </ul>

            {/* Quick sign-up (inputs tweaked for photo background) */}
            <form className="mt-2 grid gap-3" onSubmit={goToContact}>
              <input
                name="name"
                placeholder="Full name"
                className="input bg-black/30 border-white/25 placeholder:text-neutral-200"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="input bg-black/30 border-white/25 placeholder:text-neutral-200"
              />
              <button type="submit" className="btn-primary w-full">Get a Free Quote</button>
            </form>

            <button onClick={onClose} className="btn-outline w-full">No thanks</button>
          </div>
        </div>
      </div>
    </div>
  )
}
