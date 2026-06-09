import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import Industries from "../components/Industries.jsx";
import ProjectsGrid from "../components/ProjectsGrid.jsx";
import AIChat from "../components/AIChat.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";
import CTAStrip from "../components/CTAStrip.jsx";
import ReviewsToasts from "../components/ReviewsToasts.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <ReviewsToasts />
      <main>
        <Hero />
        <Features />
        <ServicesGrid />
        <Industries />
        <ProjectsGrid />
        <ContactForm />
      </main>
      <AIChat />
      <Footer />
      <CTAStrip />
    </div>
  );
}
