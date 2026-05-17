import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ProjectsGrid from '../components/ProjectsGrid.jsx'
import AIChat from '../components/AIChat.jsx'

export default function Projects(){
  return (
    <div>
      <Header/>
      <div className="container-px mx-auto mt-10">
        <span className="badge">Commercial Work</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Project experience presented like commercial case studies.</h1>
        <p className="mt-4 max-w-3xl text-neutral-300">A curated look at TRX roofing, repair, restoration, and maintenance work. Replace these labels with exact property types and scopes as you collect more commercial project details.</p>
      </div>
      <ProjectsGrid/>
      <AIChat/>
      <Footer/>
    </div>
  )
}
