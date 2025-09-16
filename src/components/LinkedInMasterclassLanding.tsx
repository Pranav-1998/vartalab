import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import CurriculumSection from "./CurriculumSection";
import InstructorSection from "./InstructorSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";

const LinkedInMasterclassLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO and Meta Tags */}
      <head>
        <title>Get a Job in 30 Days with LinkedIn - Masterclass for Students</title>
        <meta 
          name="description" 
          content="Land your dream job in 30 days with our proven LinkedIn masterclass. For Tier 1 & 2 college students. Complete roadmap, templates, and frameworks included." 
        />
        <meta name="keywords" content="LinkedIn jobs, college students, job search, career guidance, internships, Pune, Kolhapur, Satara" />
        <link rel="canonical" href="/linkedin-masterclass" />
      </head>
      
      {/* Landing Page Sections */}
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CurriculumSection />
        <InstructorSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get a Job in 30 Days with LinkedIn</h3>
              <p className="text-background/80">
                The complete masterclass for Tier 1 & 2 college students
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
                <a href="#privacy" className="hover:text-background transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-background transition-colors">Terms of Service</a>
                <a href="#refund" className="hover:text-background transition-colors">Refund Policy</a>
                <a href="#contact" className="hover:text-background transition-colors">Contact</a>
              </div>
              
              <div className="pt-8 border-t border-background/20">
                <p className="text-background/60 text-sm">
                  © 2024 LinkedIn Masterclass. All rights reserved. | Made for students, by educators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinkedInMasterclassLanding;