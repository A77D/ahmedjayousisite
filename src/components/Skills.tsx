import { Card } from "@/components/ui/card";
import { 
  Code, 
  Smartphone,
  Globe,
  Database,
  Wrench,
  MessageCircle,
  Users,
  Lightbulb,
  Zap,
  Languages,
  Palette,
  Eye,
  Target,
  Search,
  TrendingUp,
  BarChart3,
  Shield,
  Heart
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Responsive Design", "UI/UX Fundamentals"],
      color: "primary"
    },
    {
      title: "Backend & Programming",
      icon: <Database className="w-6 h-6" />,
      skills: ["PHP", "Python (ML basics)", "C#", "MySQL"],
      color: "accent"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Flutter (Dart)", "Cross-Platform Apps"],
      color: "success"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Visual Studio", "VS Code", "MySQL"],
      color: "warning"
    }
  ];

  const softSkills = [
    { name: "Team Collaboration", icon: <Users className="w-5 h-5" /> },
    { name: "Clear Communication", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Fast Learning", icon: <Zap className="w-5 h-5" /> },
    { name: "Creative Thinking", icon: <Palette className="w-5 h-5" /> },
    { name: "Detail-Oriented", icon: <Eye className="w-5 h-5" /> },
    { name: "Adaptable", icon: <Globe className="w-5 h-5" /> },
    { name: "Curious", icon: <Search className="w-5 h-5" /> },
    { name: "Motivated", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Analytical", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Resilient", icon: <Shield className="w-5 h-5" /> },
    { name: "Goal-Driven", icon: <Target className="w-5 h-5" /> }
  ];

  const languages = [
    { name: "Arabic", level: "Native", progress: 100 },
    { name: "English", level: "Fluent", progress: 90 },
    { name: "German", level: "Beginner (A1)", progress: 20 }
  ];

  return (
    <section className="py-20 px-6 bg-surface/30" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card border border-card-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className={`w-12 h-12 bg-${category.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className={`text-${category.color}`}>
                  {category.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <Code className="w-3 h-3 text-primary" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <Card className="p-6 bg-gradient-card border border-card-border shadow-card">
            <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 hover:bg-primary/5 transition-colors">
                  <div className="text-primary">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Languages */}
          <Card className="p-6 bg-gradient-card border border-card-border shadow-card">
            <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
              <Languages className="w-6 h-6 text-accent" />
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${lang.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;