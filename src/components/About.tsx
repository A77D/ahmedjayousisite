import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Globe, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent graduate with a passion for innovation and a commitment to technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Summary */}
          <div className="space-y-6">
            <div className="prose prose-lg text-foreground/90">
              <p className="text-base leading-relaxed mb-4">
                Recent graduate in <span className="text-primary font-medium">Applied Computing</span> with a strong foundation in programming languages and software concepts.
              </p>
              <p className="text-base leading-relaxed mb-4">
                I'm passionate about <span className="text-primary font-medium">mobile programming</span> and <span className="text-primary font-medium">game development</span>, with a focus on user-friendly applications and innovative digital solutions.
              </p>
              <p className="text-base leading-relaxed mb-6">
                Enthusiastic about lifelong learning and staying at the forefront of technological advancements, looking to contribute to innovative teams and make a meaningful impact in the tech industry.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent">Fast Learner</span>
              </div>
              <div className="flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-success" />
                <span className="text-sm text-success">Team Player</span>
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
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Bachelor's in Applied Computing</p>
                      <p>Palestine Technical University – Kadoorie (PTUK)</p>
                      <p className="text-primary">2018 – 2023</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Additional Training</p>
                      <p>PHP Course • Python AI/ML • Multiple Online Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border border-card-border shadow-card">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3 text-primary">Career Aspiration</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To become a <span className="text-foreground font-medium">proficient programmer</span>, 
                  delivering high-quality applications and creative solutions that combine 
                  <span className="text-primary font-medium"> technical excellence</span> with 
                  <span className="text-primary font-medium"> user-centric design</span>.
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