import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ExternalLink, MapPin, Send, Calendar } from "lucide-react";
const Contact = () => {
  const contactLinks = [{
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "ahmad20jayyousi@gmail.com",
    href: "mailto:ahmad20jayyousi@gmail.com",
    color: "primary"
  }, {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+970 597 320 456",
    href: "tel:+970597320456",
    color: "success"
  }, {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "a7madjay2k",
    href: "https://www.linkedin.com/in/a7madjay2k/",
    color: "accent"
  }, {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "A77D",
    href: "https://github.com/A77D",
    color: "muted-foreground"
  }];
  return <section className="py-20 px-6" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="p-8 bg-gradient-card border border-card-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Get in Touch</h3>
            </div>
            
            <div className="space-y-4">
              {contactLinks.map((contact, index) => <a key={index} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4 p-3 rounded-lg bg-surface/30 hover:bg-surface/50 transition-all duration-300 group">
                  <div className={`w-10 h-10 bg-${contact.color}/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <div className={`text-${contact.color}`}>
                      {contact.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{contact.label}</p>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>)}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Tulkarem, Palestine</span>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-8 bg-gradient-card border border-card-border shadow-card flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Quick Actions</h3>
            </div>

            <div className="flex-1 space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="font-medium text-primary mb-2">Looking for opportunities in:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Frontend Development</li>
                  <li>• Mobile App Development</li>
                  <li>• Full-Stack Development</li>
                  <li>• Game Development</li>
                </ul>
              </div>

              <div className="space-y-3">
                
                <Button variant="outline-hero" className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                Response time: Usually within 24 hours
              </p>
            </div>
          </Card>
        </div>

        {/* Linktree CTA */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-gradient-card border border-card-border shadow-card">
            <p className="text-muted-foreground mb-4">Find all my social links and projects in one place</p>
            <Button variant="outline-hero" asChild>
              <a href="https://linktr.ee/a7madjay2k" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit My Linktree
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;