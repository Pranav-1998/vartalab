import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, BookOpen, Users, Target } from "lucide-react";
import roadmapImage from "@/assets/roadmap-30days.jpg";

const highlights = [
  {
    icon: Target,
    title: "No Fluff, Just Results",
    description: "Proven system used by 1000+ students"
  },
  {
    icon: BookOpen,
    title: "Complete Workbook",
    description: "Templates, scripts, and frameworks included"
  },
  {
    icon: Zap,
    title: "30-Day Roadmap",
    description: "Step-by-step daily action plan"
  },
  {
    icon: Users,
    title: "Recruiter-Approved",
    description: "Strategies that actually work in 2024"
  }
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full text-primary-dark font-medium text-sm mb-6">
              <Zap className="w-4 h-4" />
              The Solution You've Been Waiting For
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Roadmap to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Job in 30 Days
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No theory. No fluff. A proven system with templates, reach-out scripts, 
              and branding frameworks that actually work.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={index} className="bg-card p-6 rounded-xl shadow-soft border hover:shadow-medium transition-all duration-300">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft border">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      100x Value Guarantee
                    </h3>
                    <p className="text-muted-foreground">
                      Get more value than what you pay. If you don't see results in 30 days, 
                      we'll refund your money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <img
                src={roadmapImage}
                alt="30-day job success roadmap"
                className="w-full h-auto rounded-2xl shadow-large"
              />
              
              {/* Floating progress indicator */}
              <div className="absolute top-6 right-6 bg-card p-4 rounded-xl shadow-medium border">
                <div className="text-sm font-medium text-muted-foreground mb-2">Progress</div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-primary rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-sm font-medium text-primary">75%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="group">
              Start Your 30-Day Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Join 500+ students who started this week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;