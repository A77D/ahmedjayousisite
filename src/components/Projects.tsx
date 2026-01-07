import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Smartphone, Globe, Calculator, ShoppingCart } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t('projects.saleek'),
      description: t('projects.saleekDesc'),
      icon: <Smartphone className="w-8 h-8" />,
      tags: ["Flutter", "Dart", "Real-time", "Maps"],
      color: "primary",
      status: t('projects.inDevelopment')
    },
    {
      title: t('projects.weddingPlanner'),
      description: t('projects.weddingPlannerDesc'),
      icon: <Globe className="w-8 h-8" />,
      tags: ["HTML", "CSS", "PHP", "Full-Stack"],
      color: "accent",
      status: t('projects.graduationProject')
    },
    {
      title: t('projects.onlineStore'),
      description: t('projects.onlineStoreDesc'),
      icon: <ShoppingCart className="w-8 h-8" />,
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      color: "success"
    },
    {
      title: t('projects.gpaCalculator'),
      description: t('projects.gpaCalculatorDesc'),
      icon: <Calculator className="w-8 h-8" />,
      tags: ["C#", "Desktop App", "Student Tool"],
      color: "warning"
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-gradient-card border border-card-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 bg-${project.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <div className={`text-${project.color}`}>
                    {project.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-xl text-foreground">{project.title}</h3>
                    {project.status && (
                      <span className={`text-xs px-2 py-1 rounded-full bg-${project.color}/10 text-${project.color}`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {t('projects.moreProjects')}
          </p>
          <a 
            href="https://github.com/A77D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
          >
            <Github className="w-5 h-5" />
            {t('projects.viewGithub')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
