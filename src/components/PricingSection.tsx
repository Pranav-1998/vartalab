import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const features = [
  "Complete 30-Day Roadmap",
  "Actionable Workbook & Templates",
  "LinkedIn Profile Optimization Guide",
  "Recruiter Outreach Scripts",
  "Personal Branding Framework",
  "Content Templates Library",
  "Live Q&A Session Access",
  "Lifetime Access to Materials",
  "Private Community Access",
  "Email Support"
];

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Secure Your Spot Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Limited seats available. Join 1000+ students who've transformed their job search
            </p>
          </div>
          
          {/* Pricing Card */}
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-accent px-6 py-2 rounded-full text-accent-foreground font-semibold text-sm shadow-medium z-10">
              🔥 Most Popular Choice
            </div>
            
            <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-large border-2 border-primary/20">
              <div className="text-center mb-8">
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl text-muted-foreground line-through">₹2,999</span>
                  <div className="text-6xl font-bold text-primary">₹499</div>
                  <p className="text-muted-foreground mt-2">One-time payment • Lifetime access</p>
                </div>
                
                {/* Urgency Timer */}
                <div className="bg-destructive/10 p-4 rounded-xl border border-destructive/20">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-destructive">Enrollment closes in:</span>
                  </div>
                  <div className="flex justify-center gap-4">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="text-2xl font-bold text-destructive">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{unit}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="text-center space-y-4">
                <Button variant="hero" size="lg" className="w-full group text-lg py-6">
                  <Zap className="w-5 h-5 mr-2" />
                  Join the Masterclass Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Limited to 100 students</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>87 seats remaining</span>
                  </div>
                </div>
              </div>
              
              {/* Guarantee */}
              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">30-Day Money-Back Guarantee:</strong> If you don't see improvement in your LinkedIn presence within 30 days, get a full refund.
                </p>
              </div>
            </div>
          </div>
          
          {/* Scarcity Elements */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card p-4 rounded-xl shadow-soft border text-center">
              <div className="text-2xl font-bold text-destructive mb-1">13</div>
              <div className="text-sm text-muted-foreground">Students enrolled today</div>
            </div>
            <div className="bg-card p-4 rounded-xl shadow-soft border text-center">
              <div className="text-2xl font-bold text-primary mb-1">87</div>
              <div className="text-sm text-muted-foreground">Seats remaining</div>
            </div>
            <div className="bg-card p-4 rounded-xl shadow-soft border text-center">
              <div className="text-2xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-muted-foreground">Days left to enroll</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;