import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Globe, Zap } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Summary */}
          <div className="space-y-6">
            <div className="prose prose-lg text-foreground/90">
              <p className="text-base leading-relaxed mb-4">
                {t('about.description1')}
              </p>
              <p className="text-base leading-relaxed mb-4">
                {t('about.description2')}
              </p>
              <p className="text-base leading-relaxed mb-6">
                {t('about.description3')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">{t('about.softSkills.problemSolver')}</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent">{t('about.softSkills.fastLearner')}</span>
              </div>
              <div className="flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-success" />
                <span className="text-sm text-success">{t('about.softSkills.teamPlayer')}</span>
              </div>
              <div className="flex items-center gap-2 bg-warning/10 border border-warning/20 rounded-full px-4 py-2">
                <Code className="w-4 h-4 text-warning" />
                <span className="text-sm text-warning">{t('about.softSkills.creativeThinker')}</span>
              </div>
              <div className="flex items-center gap-2 bg-info/10 border border-info/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-info" />
                <span className="text-sm text-info">{t('about.softSkills.detailOriented')}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">{t('about.softSkills.adaptable')}</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                <Code className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent">{t('about.softSkills.curious')}</span>
              </div>
              <div className="flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-success" />
                <span className="text-sm text-success">{t('about.softSkills.motivated')}</span>
              </div>
              <div className="flex items-center gap-2 bg-warning/10 border border-warning/20 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-warning" />
                <span className="text-sm text-warning">{t('about.softSkills.analytical')}</span>
              </div>
              <div className="flex items-center gap-2 bg-info/10 border border-info/20 rounded-full px-4 py-2">
                <Code className="w-4 h-4 text-info" />
                <span className="text-sm text-info">{t('about.softSkills.resilient')}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">{t('about.softSkills.openMinded')}</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent">{t('about.softSkills.goalDriven')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Goals */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-card border border-card-border shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('about.education')}</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">{t('about.bachelorDegree')}</p>
                      <p>{t('about.university')}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('about.additionalTraining')}</p>
                      <p>{t('about.trainingDetails')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border border-card-border shadow-card">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">{t('about.careerAspiration')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.aspirationText')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;