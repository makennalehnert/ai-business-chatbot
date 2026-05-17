import { useMemo, useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'

const prompts = [
  {
    q: 'Do you install TPO roofing?',
    a: 'Yes. TRX works with commercial flat and low-slope roofing systems including TPO, EPDM, PVC, modified bitumen, coatings, and metal systems.'
  },
  {
    q: 'Can TRX help with multi-property maintenance?',
    a: 'Yes. TRX can support property managers with inspections, repair documentation, preventative maintenance, and priority response planning across multiple buildings.'
  },
  {
    q: 'Do you offer emergency leak response?',
    a: 'Yes. For active leaks, TRX can inspect the issue, help protect the building, document the damage, and create a repair or restoration plan.'
  },
  {
    q: 'Do you help with storm claims?',
    a: 'Yes. TRX provides photo documentation, inspection notes, and restoration guidance for hail, wind, and storm-related roof damage.'
  },
]

function findAnswer(message){
  const clean = message.toLowerCase()
  if (clean.includes('tpo') || clean.includes('epdm') || clean.includes('flat')) return prompts[0].a
  if (clean.includes('maintenance') || clean.includes('property') || clean.includes('manager')) return prompts[1].a
  if (clean.includes('leak') || clean.includes('emergency')) return prompts[2].a
  if (clean.includes('storm') || clean.includes('insurance') || clean.includes('claim') || clean.includes('hail')) return prompts[3].a
  return 'TRX can help with commercial roofing inspections, roof replacement, emergency repairs, storm restoration, coatings, and maintenance planning. For the fastest answer, call (773) 993-4339 or send details through the contact form.'
}

export default function AIChat(){
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role:'bot', text:'Hi — I’m the TRX assistant. Ask about commercial roofing, maintenance plans, emergency leaks, or storm restoration.' }
  ])

  const suggestions = useMemo(() => prompts.map(p => p.q), [])

  const ask = (text) => {
    const value = text.trim()
    if (!value) return
    setMessages((current) => [...current, {role:'user', text:value}, {role:'bot', text:findAnswer(value)}])
    setInput('')
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 z-[60] flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 font-semibold text-navy-950 shadow-soft ring-1 ring-black/10 transition hover:bg-gold-300"
        aria-label="Open TRX assistant"
      >
        <MessageCircle size={20}/> Ask TRX
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-[70] w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-[1.5rem] border border-white/10 bg-navy-950 shadow-soft ring-1 ring-white/10">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gold-400 p-2 text-navy-950"><Bot size={18}/></div>
              <div>
                <p className="font-semibold text-white">TRX Commercial Assistant</p>
                <p className="text-xs text-neutral-400">Instant roofing answers</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-neutral-300 hover:bg-white/10" aria-label="Close assistant"><X size={18}/></button>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${m.role === 'user' ? 'bg-gold-400 text-navy-950' : 'bg-white/[0.06] text-neutral-200 ring-1 ring-white/10'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.slice(0, 2).map((s) => (
                <button key={s} onClick={() => ask(s)} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300 hover:bg-white/10">{s}</button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); ask(input) }} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input"
                placeholder="Ask about commercial roofing..."
              />
              <button className="btn-primary px-4" aria-label="Send message"><Send size={18}/></button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
