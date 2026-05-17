import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import Industries from '../components/Industries.jsx'
import AIChat from '../components/AIChat.jsx'

export default function Services(){
  return (
    <div>
      <Header/>
      <div className="container-px mx-auto mt-10">
        <span className="badge">Commercial Solutions</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Roofing systems, repairs, and maintenance for commercial properties.</h1>
        <p className="mt-4 max-w-3xl text-neutral-300">TRX supports property owners and managers with roof replacement, emergency leak response, storm restoration, coatings, and long-term maintenance programs.</p>
      </div>
      <ServicesGrid cta={false}/>
      <Industries/>
      <AIChat/>
      <Footer/>
    </div>
  )
}
