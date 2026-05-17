const reviews = [
  {name:'Sarah P.', city:'Machesney Park, IL', text:'Flawless install and the cleanest crew I’ve ever seen. Insurance was simple with their help.'},
  {name:'David R.', city:'Rockford, IL', text:'They found storm damage the adjuster missed and documented everything. Highly recommend.'},
  {name:'Emily K.', city:'Loves Park, IL', text:'Great price, zero pressure, and the roof looks amazing.'},
]

export default function Reviews(){
  return (
    <section className="container-px mx-auto mt-16 md:mt-24">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Homeowners love our work</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {reviews.map((r,i)=>(
          <div key={i} className="card p-6">
            <p className="text-neutral-200">“{r.text}”</p>
            <p className="mt-4 text-sm font-semibold text-white">{r.name}</p>
            <p className="text-xs text-neutral-400">{r.city}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
