// src/components/ReviewsToasts.jsx
import { useEffect, useMemo, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Floating, randomly positioned review bubbles for the home page.
 * - White, clean "Google-style" cards with star rating + Google badge
 * - Spawns every 30s, each auto-dismisses after 5s
 * - One at a time (adjust MAX_CONCURRENT if you want more)
 */

const DEFAULT_REVIEWS = [
  { name: 'Sarah P.', city: 'Machesney Park, IL', text: 'Flawless install and super clean crew. Insurance was simple with their help.' },
  { name: 'David R.', city: 'Rockford, IL', text: 'They found hail damage the adjuster missed and handled docs. Highly recommend.' },
  { name: 'Emily K.', city: 'Loves Park, IL', text: 'Zero pressure, fair price, and the roof looks amazing.' },
  { name: 'Mike H.', city: 'Roscoe, IL', text: 'Fast leak repair before a storm. Great communication.' },
  { name: 'Jasmine T.', city: 'Belvidere, IL', text: 'On time, respectful crew, and pristine cleanup. A+.' },
]

// Timing
const SPAWN_INTERVAL_MS = 15000   // every 30 seconds
const TOAST_LIFETIME_MS = 5000    // visible ~5 seconds
const MAX_CONCURRENT = 1          // one at a time

let _id = 0
const nextId = () => ++_id

export default function ReviewsToasts({ reviews = DEFAULT_REVIEWS }) {
  const [toasts, setToasts] = useState([])
  const spawnRef = useRef(null)

  // Shuffle once
  const pool = useMemo(() => {
    const arr = [...reviews]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [reviews])

  const pick = () => pool[Math.floor(Math.random() * pool.length)]

  const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const computePosition = () => {
    // Keep within viewport margins
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    // Estimated bubble size
    const estWidth = Math.min(360, Math.max(300, Math.floor(vw * 0.45)))
    const estHeight = 120

    const margin = 16
    const leftMin = margin
    const leftMax = Math.max(margin, vw - estWidth - margin)
    const topMin = margin + 56 // below sticky header
    const topMax = Math.max(topMin, vh - estHeight - margin - 56)

    if (vw < 640) {
      // On mobile, bias near bottom center
      const width = Math.min(estWidth, vw - margin * 2)
      const left = (vw - width) / 2
      const top = randomBetween(vh - estHeight - 96, vh - estHeight - 24)
      return { top, left, width }
    }

    return {
      top: randomBetween(topMin, topMax),
      left: randomBetween(leftMin, leftMax),
      width: estWidth,
    }
  }

  const spawnToast = () => {
    setToasts(current => {
      if (current.length >= MAX_CONCURRENT) return current
      const id = nextId()
      const pos = computePosition()
      const review = pick()
      // Auto-remove
      setTimeout(() => {
        setToasts(t => t.filter(x => x.id !== id))
      }, TOAST_LIFETIME_MS)
      return [...current, { id, review, pos }]
    })
  }

  useEffect(() => {
    // spawn immediately once, then every 30s
    spawnToast()
    spawnRef.current = setInterval(spawnToast, SPAWN_INTERVAL_MS)
    const onResize = () => setToasts(ts => ts.map(t => ({ ...t, pos: computePosition() })))
    window.addEventListener('resize', onResize)
    return () => {
      if (spawnRef.current) clearInterval(spawnRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const dismiss = (id) => setToasts(t => t.filter(x => x.id !== id))

  return (
    <div className="fixed inset-0 z-[55] pointer-events-none">
      <AnimatePresence>
        {toasts.map(({ id, review, pos }) => (
          <FloatingToast key={id} review={review} pos={pos} onClose={() => dismiss(id)} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function FloatingToast({ review, pos, onClose }) {
  const { name, city, text } = review
  const style = { top: pos.top, left: pos.left, width: pos.width }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 6 }}
      transition={{ type: 'spring', stiffness: 420, damping: 30, mass: 0.7 }}
      className="absolute pointer-events-auto select-none"
      style={style}
      role="status"
      aria-live="polite"
    >
      <div className="rounded-2xl bg-white text-navy-950 shadow-soft ring-1 ring-black/5 p-3 sm:p-4">
        <div className="flex items-start gap-3">
          <GoogleBadge />

          <div className="flex-1">
            <Stars />
            <p className="mt-1 text-[13px] leading-snug text-neutral-800">“{text}”</p>
            <p className="mt-1 text-[12px] text-neutral-500">
              — {name} <span className="text-neutral-400">• {city}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="ml-1 rounded-md p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-600"
            aria-label="Dismiss review"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192L12 .587z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleBadge() {
  // Accurate multi-color "G" mark (clean green segment)
  return (
    <div className="flex items-center gap-1.5">
      <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 31.9 29.4 35 24 35c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.3 0 6.3 1.2 8.6 3.3l5.7-5.7C34.5 3.5 29.5 1.5 24 1.5 12.1 1.5 2.5 11.1 2.5 23S12.1 44.5 24 44.5 45.5 34.9 45.5 23c0-1.7-.2-3.2-.6-4.5z"/>
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.8 18.9 13 24 13c3.3 0 6.3 1.2 8.6 3.3l5.7-5.7C34.5 3.5 29.5 1.5 24 1.5 15.5 1.5 8.1 6.3 6.3 14.7z"/>
        <path fill="#4CAF50" d="M24 44.5c5.4 0 10.4-1.8 14.3-4.9l-6.6-5.4c-2 1.3-4.6 2.1-7.7 2.1-6 0-11.1-4-12.9-9.4H4.4v5.9C8.3 39.8 15.6 44.5 24 44.5z"/>
        <path fill="#1976D2" d="M45.5 23c0-1.1-.1-2.1-.3-3.1H24v6.1h11.5c-.5 3-2.1 5.6-4.3 7.3l6.6 5.4C41.9 35.7 45.5 29.9 45.5 23z"/>
      </svg>
      <span className="text-[12px] font-semibold text-neutral-600">Google</span>
    </div>
  )
}
