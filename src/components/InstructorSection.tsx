import { Award, BookOpen, Users, TrendingUp } from "lucide-react";
import instructorImage from "@/assets/kiran-photo.jpg";

const achievements = [
  {
    icon: Users,
    number: "1000+",
    label: "Students Helped"
  },
  {
    icon: TrendingUp,
    number: "4+",
    label: "Years Experience"
  },
  {
    icon: BookOpen,
    number: "50+",
    label: "Success Stories"
  },
  {
    icon: Award,
    number: "95%",
    label: "Job Success Rate"
  }
];

const InstructorSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Your Instructor
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from someone who's helped hundreds of students land their dream jobs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src={instructorImage}
                  alt="Kiran - Personal Branding Expert"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-large"
                />
                
                {/* Floating credentials */}
                <div className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-medium border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">4+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl shadow-medium border">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">Expert</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Hi, I'm Kiran 👋
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    I'm a writer and founder helping students and professionals build their 
                    personal brands on LinkedIn. Over the past 4+ years, I've specialized in 
                    branding, content strategy, and career consulting.
                  </p>
                  <p>
                    I've seen too many talented students struggle with job applications because 
                    they don't know how to present themselves online. That's why I created this 
                    masterclass.
                  </p>
                  <p>
                    <strong className="text-foreground">My mission:</strong> Help students from 
                    all over India land jobs faster with proven LinkedIn strategies that actually work.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="bg-card p-6 rounded-xl shadow-soft border text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Quote */}
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-lg font-medium text-foreground italic">
                  "Every student deserves a fair chance at their dream job. This masterclass 
                  is my way of leveling the playing field."
                </p>
                <p className="text-muted-foreground mt-2">— Kiran, Founder & Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;