import { useMemo, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import Fuse from "fuse.js";

const prompts = [
  {
    q: "Do you install TPO roofing?",
    tags: "tpo materials flat",
    a: "Yes. TRX works with commercial flat and low-slope roofing systems including TPO, EPDM, PVC, modified bitumen, coatings, and metal systems.",
  },
  {
    q: "Can TRX help with multi-property maintenance?",
    tags: "property managers multiple",
    a: "Yes. TRX can support property managers with inspections, repair documentation, preventative maintenance, and priority response planning across multiple buildings.",
  },
  {
    q: "Do you offer emergency leak response?",
    tags: "emergency leaks",
    a: "Yes. For active leaks, TRX can inspect the issue, help protect the building, document the damage, and create a repair or restoration plan.",
  },
  {
    q: "Do you help with storm claims?",
    tags: "document inspect restore hail wind storm damage claim",
    a: "Yes. TRX provides photo documentation, inspection notes, and restoration guidance for hail, wind, and storm-related roof damage.",
  },
  {
    q: "What does TRX specialize in?",
    tags: "specialize specialty",
    a: "We handle everything roofing — from residential shingles to large commercial flat roofs, coatings, and repairs. If it’s a roof, we’re the Xperts.",
  },
  {
    q: "Do you offer both residential and commercial services?",
    tags: "homes home commercial residential",
    a: "Yes. TRX serves homeowners, property managers, HOAs, and business owners. We handle everything from small leak repairs to multi-building complexes.",
  },
  {
    q: "How do I know if I need a new roof or just a repair?",
    tags: "inspection services need",
    a: "We provide a free inspection and photo documentation, so you can see exactly what’s happening before spending a dollar.",
  },
  {
    q: "What roofing materials do you work with?",
    tags: "material use materials shingles",
    a: "We specialize in shingles, TPO, EPDM, modified bitumen, coatings, metal, and tile systems — built to meet local code and manufacturer specs.",
  },
  {
    q: "How long does a typical roofing job take?",
    tags: "time days",
    a: "Residential projects usually take 1 to 3 days; larger commercial jobs vary depending on roof size and structure. We’ll always give you a clear timeline up front.",
  },
  {
    q: "Do you help with insurance claims?",
    tags: "insurance coverage",
    a: "Absolutely. Our team includes licensed public adjusters who can guide you through the process to make sure you get the coverage you deserve.",
  },
  {
    q: "What if my insurance company denies my claim?",
    tags: "insurance denies claim policy",
    a: "We can review your policy, document code upgrades, and file a proper supplement or re-inspection to fight for full approval.",
  },
  {
    q: "Will filing a claim raise my insurance rate?",
    tags: "claim raise rate fault",
    a: "Not typically — storm damage claims are considered “no-fault.” We’ll help you navigate the process safely and strategically.",
  },
  {
    q: "Do you work with property managers or multi-unit buildings?",
    tags: "multiple unit units apartment apartments condo complex condos retail warehouses",
    a: "Yes. We specialize in apartment complexes, condos, warehouses, and retail buildings — including maintenance programs and roof coatings.",
  },
  {
    q: "Can you work around tenants or business hours?",
    tags: "work around business hours schedule",
    a: "Yes. We plan our projects around your schedule to minimize disruption while keeping the job OSHA-compliant and on time.",
  },
  {
    q: "Do you offer maintenance or service programs?",
    tags: "maintenance service programs plans",
    a: "We offer customizable maintenance plans for commercial properties to extend roof life and prevent costly repairs.",
  },
  {
    q: "Are your roofs backed by a warranty?",
    tags: "warranty backed workmanship",
    a: "Every TRX roof includes a workmanship warranty, plus manufacturer coverage for materials — giving you total peace of mind.",
  },
  {
    q: "Are you licensed and insured?",
    tags: "license licensed insured bonded",
    a: "Yes. TRX is fully licensed, bonded, and insured in Illinois for both residential and commercial roofing.",
  },
  {
    q: "What makes TRX different from other roofers?",
    tags: "pick better",
    a: "We combine precision craftsmanship, industry knowledge, and honest communication. We don’t guess — we Xpert.",
  },
];

const fuse = new Fuse(prompts, {
  keys: ['q', 'tags'],
  threshold: 0.6,
  includeScore: true,
  ignoreLocation: true,
})

async function findAnswer(message) {
  const results = fuse.search(message);

  if (results.length > 0) {
    const bestMatch = results[0];

    // strong match
    if (bestMatch.score < 0.6) {
      return bestMatch.item.a;
    }
  }

  // fallback to AI
  return await getAIResponse(message);
}

const API_URL = import.meta.env.VITE_API_URL;

async function getAIResponse(message) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  return data.reply;
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi — I’m the TRX assistant. Ask about commercial roofing, maintenance plans, emergency leaks, or anything roofing related.",
    },
  ]);

  const suggestions = useMemo(() => prompts.map((p) => p.q), []);

  const ask = async (text) => {
    const value = text.trim();

    if (!value) return;

    setInput("");

    try {
      const reply = await findAnswer(value);

      setMessages((current) => [
        ...current,
        { role: "user", text: value },
        { role: "bot", text: reply },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((current) => [
        ...current,
        { role: "user", text: value },
        {
          role: "bot",
          text: "Sorry, something went wrong.",
        },
      ]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 z-[60] flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 font-semibold text-navy-950 shadow-soft ring-1 ring-black/10 transition hover:bg-gold-300"
        aria-label="Open TRX assistant"
      >
        <MessageCircle size={20} /> Ask TRX
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-[70] w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-[1.5rem] border border-white/10 bg-navy-950 shadow-soft ring-1 ring-white/10">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gold-400 p-2 text-navy-950">
                <Bot size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">
                  TRX Commercial Assistant
                </p>
                <p className="text-xs text-neutral-400">
                  Instant roofing answers
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-neutral-300 hover:bg-white/10"
              aria-label="Close assistant"
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${m.role === "user" ? "bg-gold-400 text-navy-950" : "bg-white/[0.06] text-neutral-200 ring-1 ring-white/10"}`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.slice(0, 2).map((s) => (
                <button
                  key={s}
                  onClick={() => ask(s)}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300 hover:bg-white/10"
                >
                  {s}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input"
                placeholder="Ask about commercial roofing..."
              />
              <button className="btn-primary px-4" aria-label="Send message">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
