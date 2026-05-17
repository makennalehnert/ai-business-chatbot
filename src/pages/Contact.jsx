import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ContactForm from '../components/ContactForm.jsx'
import AIChat from '../components/AIChat.jsx'

export default function Contact(){
  return (
    <div>
      <Header/>
      <div className="container-px mx-auto mt-10">
        <span className="badge">Request Inspection</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Tell us about your property or roofing issue.</h1>
        <p className="mt-4 max-w-3xl text-neutral-300">Send the details and TRX will follow up about inspections, repairs, storm restoration, maintenance, or commercial roof replacement planning.</p>
      </div>
      <ContactForm/>
      <AIChat/>
      <Footer/>
    </div>
  )
}
