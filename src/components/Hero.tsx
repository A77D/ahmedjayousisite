import { Button } from "@/components/ui/button";
import { ExternalLink, Download, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Tulkarem, Palestine</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Ahmed Jayousi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Frontend & Mobile Developer
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating user-friendly applications and innovative digital solutions. 
            Specialized in <span className="text-primary font-medium">Flutter</span>, 
            <span className="text-primary font-medium"> JavaScript</span>, and 
            <span className="text-primary font-medium"> mobile development</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline-hero" size="lg" className="group">
              <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
              View Projects
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:ahmad20jayyousi@gmail.com" className="hover:text-primary transition-colors">
              ahmad20jayyousi@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <a href="tel:+970597320456" className="hover:text-primary transition-colors">
              +970 597 320 456
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40 animation-delay-500" />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-primary-glow rounded-full animate-pulse opacity-80 animation-delay-1000" />
    </section>
  );
};

export default Hero;