import { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Put the filenames you want to show (must exist in /public/photo)
const FILES = [
  'roofing1.JPEG','roofing2.JPEG','roofing3.JPEG','roofing4.JPEG',
  'roofing6.JPEG','roofing9.JPEG','roofing10.JPEG','roofing11.JPEG',
  'roofing12.JPEG','roofing13.JPEG','roofing14.JPEG','roofing15.JPEG',
  'roofing17.JPEG','roofing19.JPEG','roofing20.JPEG','roofing21.JPEG',
  'roofing23.JPEG','roofing24.JPEG','roofing25.JPEG','roofing26.JPEG',
  'roofing32.JPEG','roofing34.JPEG','roofing35.JPEG','roofing36.JPEG',
  'roofing39.JPEG','roofing40.JPEG','roofing41.JPEG','roofing42.JPEG',
  'roofing43.JPEG','roofing44.JPEG','roofing45.JPEG','roofing46.JPEG',
  'roofing49.JPEG','roofing50.JPEG',
]


const IMAGES = FILES.map(f => ({ src: `/${f}`, alt: f }))

export default function Residential(){
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i)=>{ setIndex(i); setOpen(true) }
  const close  = ()=> setOpen(false)
  const prev   = useCallback(()=> setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length), [])
  const next   = useCallback(()=> setIndex(i => (i + 1) % IMAGES.length), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e)=>{ if(e.key==='Escape') close(); if(e.key==='ArrowLeft') prev(); if(e.key==='ArrowRight') next() }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return ()=>{ document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow }
  }, [open, prev, next])

  const onBackdropClick = (e)=>{ if(e.target === e.currentTarget) close() }

  return (
    <div>
      <Header />

      <section className="container-px mx-auto mt-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Residential Gallery</h1>
        <p className="mt-2 text-neutral-300 max-w-2xl">
          Click any photo to view full-screen. Use arrows or ESC to navigate.
        </p>

        {/* Responsive masonry-like columns */}
        <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {IMAGES.map((img, i)=>(
            <button
              key={img.src}
              onClick={()=>openAt(i)}
              className="mb-4 block w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label={`Open image ${i+1} of ${IMAGES.length}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition duration-300 hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
                onError={(e)=>{ e.currentTarget.src = '/photo/placeholder.jpg' }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Residential image viewer"
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 rounded-lg p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400"
            aria-label="Close"
          >
            <X size={24}/>
          </button>

          <button
            onClick={(e)=>{e.stopPropagation(); prev()}}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400"
            aria-label="Previous image"
          >
            <ChevronLeft size={28}/>
          </button>

          <button
            onClick={(e)=>{e.stopPropagation(); next()}}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400"
            aria-label="Next image"
          >
            <ChevronRight size={28}/>
          </button>

          <div className="max-h-[85vh] max-w-[95vw]">
            <img src={IMAGES[index].src} alt="" className="max-h-[85vh] max-w-[95vw] object-contain"/>
            <div className="mt-3 text-center text-sm text-neutral-300">
              {index + 1} / {IMAGES.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
