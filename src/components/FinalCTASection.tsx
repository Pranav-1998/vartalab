import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle, Clock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white font-medium text-sm">
              <Zap className="w-4 h-4" />
              Transform Your Career Today
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Your Career Starts Here
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Don't let another day pass wondering "what if". Join 1000+ students who've 
              already started their journey to landing their dream jobs.
            </p>
          </div>
          
          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Proven System</h3>
              <p className="text-white/80 text-sm">Used by 1000+ successful students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">30-Day Results</h3>
              <p className="text-white/80 text-sm">See improvement in just one month</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Zap className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Lifetime Access</h3>
              <p className="text-white/80 text-sm">Keep all materials forever</p>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="space-y-6">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group text-lg py-6 px-12 bg-white text-primary hover:bg-white/90 hover:scale-105 transform transition-all duration-300 shadow-large font-bold"
            >
              <Zap className="w-6 h-6 mr-3" />
              Enroll Now for ₹499
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>87 seats remaining</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>3 days left to enroll</span>
              </div>
            </div>
            
            <p className="text-white/70 text-sm max-w-md mx-auto">
              🔒 Secure payment • 30-day money-back guarantee • Instant access
            </p>
          </div>
          
          {/* Last minute urgency */}
          <div className="mt-12 bg-destructive/20 backdrop-blur-sm p-4 rounded-xl border border-destructive/30">
            <p className="text-white text-sm">
              ⚡ <strong>Last chance:</strong> Price increases to ₹999 after enrollment closes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;