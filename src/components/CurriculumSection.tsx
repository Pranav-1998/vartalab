import { CheckCircle, BookOpen, MessageSquare, Users, Lightbulb, Target, FileText, Zap } from "lucide-react";

const curriculumItems = [
  {
    icon: Users,
    title: "LinkedIn Profile Mastery",
    description: "Build a profile that recruiters can't ignore",
    details: ["Headline optimization", "Summary writing", "Skills showcase"]
  },
  {
    icon: MessageSquare,
    title: "Storytelling Templates",
    description: "Post templates that get noticed and shared",
    details: ["Content pillars", "Engagement hooks", "Call-to-action frameworks"]
  },
  {
    icon: Target,
    title: "Recruiter Outreach Strategy",
    description: "Step-by-step roadmap to reach out effectively",
    details: ["Connection requests", "Follow-up sequences", "Interview conversion"]
  },
  {
    icon: Lightbulb,
    title: "Personal Brand Framework",
    description: "Identify your vision and brand values",
    details: ["Brand positioning", "Unique value proposition", "Industry expertise"]
  },
  {
    icon: FileText,
    title: "Actionable Workbook",
    description: "Templates and checklists to follow blindly",
    details: ["Daily action plans", "Progress trackers", "Template library"]
  },
  {
    icon: Zap,
    title: "30-Day Implementation",
    description: "Complete roadmap with daily milestones",
    details: ["Week-by-week goals", "Success metrics", "Troubleshooting guide"]
  }
];

const CurriculumSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent-foreground font-medium text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              Complete Curriculum
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What You'll Learn
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to transform your LinkedIn presence and land job interviews
            </p>
          </div>
          
          {/* Curriculum Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {curriculumItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group bg-card p-6 rounded-xl shadow-soft border hover:shadow-medium hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          
          {/* Value Proposition */}
          <div className="bg-gradient-secondary p-8 rounded-2xl border">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                More Than Just a Class. A Complete System.
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: FileText, label: "Workbook" },
                  { icon: MessageSquare, label: "Templates" },
                  { icon: Target, label: "Frameworks" },
                  { icon: Zap, label: "30-Day Roadmap" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2">100x Value</div>
              <p className="text-muted-foreground">
                Everything you need for just ₹499
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;