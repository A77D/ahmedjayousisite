import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-surface/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">© 2025 Ahmed Jayousi. Built with passion for innovation.</p>
        </div>
      </footer>
    </div>;
};
export default Index;