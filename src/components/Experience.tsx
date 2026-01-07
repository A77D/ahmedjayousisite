import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      title: t('experience.softwareDev'),
      company: t('experience.alrateb'),
      location: "Palestine",
      period: t('experience.alratebPeriod'),
      description: t('experience.alratebDesc'),
      type: "work"
    },
    {
      title: t('experience.frontendDev'),
      company: t('experience.freelance'),
      location: "Palestine / Remote",
      period: t('experience.freelancePeriod'),
      description: t('experience.freelanceDesc'),
      highlights: [
        t('experience.freelanceHighlight1'),
        t('experience.freelanceHighlight2'),
        t('experience.freelanceHighlight3'),
        t('experience.freelanceHighlight4')
      ],
      type: "freelance"
    }
  ];

  return (
    <section className="py-20 px-6 bg-surface/30" id="experience">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-gradient-card border border-card-border shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${exp.type === 'work' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    <Briefcase className={`w-7 h-7 ${exp.type === 'work' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-xl text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('experience.certifications')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card border border-card-border shadow-card">
              <h4 className="font-semibold text-lg mb-2">{t('experience.pythonAI')}</h4>
              <p className="text-sm text-muted-foreground">{t('experience.hopeCompany')}</p>
            </Card>
            <Card className="p-6 bg-gradient-card border border-card-border shadow-card">
              <h4 className="font-semibold text-lg mb-2">{t('experience.phpCourse')}</h4>
              <p className="text-sm text-muted-foreground">{t('experience.hopeCompany')}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
