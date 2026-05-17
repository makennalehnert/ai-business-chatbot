export default function ContactForm(){
  return (
    <section className="container-px mx-auto mt-16 md:mt-24">
      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="card p-6">
          <h2 className="text-2xl font-bold text-white">Book a Free Inspection</h2>
          <p className="mt-2 text-neutral-300">We’ll reply within one business day.</p>
          <form className="mt-6 grid gap-4">
            <input required placeholder="Full name" className="input" />
            <input required type="tel" placeholder="Phone number" className="input" />
            <input type="email" placeholder="Email (optional)" className="input" />
            <textarea rows="4" placeholder="Tell us what’s going on" className="input"></textarea>
            <button className="btn-primary">Request Inspection</button>
          </form>
        </div>
        <div className="card overflow-hidden">
          <img src="/commercialmap.jpeg" alt="Map" className="h-full w-full object-cover opacity-90"/>
        </div>
      </div>
    </section>
  )
}
