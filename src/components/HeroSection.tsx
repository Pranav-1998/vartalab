import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Target } from "lucide-react";
import heroImage from "@/assets/hero-student.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-secondary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full text-primary-dark font-medium text-sm">
              <Target className="w-4 h-4" />
              For Tier 1 & 2 College Students
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Land Your Dream Job in{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  30 Days
                </span>{" "}
                with LinkedIn 🚀
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                An actionable masterclass + workbook for Tier 1 & 2 college students 
                to crack jobs faster with proven LinkedIn strategies.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-medium">1000+ Students Enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">30-Day Roadmap</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Enroll Now for ₹499
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Limited Seats Available
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">500+ enrolled this week</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Confident student with LinkedIn profile"
                className="w-full h-auto rounded-2xl shadow-large"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-medium border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Profile Views: +245%</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-medium border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Interview Calls: +5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;