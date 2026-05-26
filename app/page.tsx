import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import ToolsMarquee from "@/components/ToolsMarquee";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Expertise />
      <Projects />
      <Testimonials />
      <Skills />
      <ToolsMarquee />
      <About />
      <Contact />
    </main>
  );
}
