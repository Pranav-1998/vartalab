import { AlertTriangle, X, Frown } from "lucide-react";
import problemImage from "@/assets/problem-illustration.jpg";

const problems = [
  {
    icon: X,
    title: "Sending 100s of applications",
    description: "Getting zero replies from recruiters"
  },
  {
    icon: Frown,
    title: "Confused LinkedIn profile",
    description: "Don't know how to make it stand out"
  },
  {
    icon: AlertTriangle,
    title: "No networking strategy",
    description: "Clueless about what to post or how to connect"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              If this feels like you,{" "}
              <span className="text-muted-foreground">you're not alone</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thousands of talented students struggle with the same challenges every day
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src={problemImage}
                alt="Student struggling with job applications"
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Overlay stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold text-destructive">0</div>
                <div className="text-sm text-muted-foreground">Interview calls this month</div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-8">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-6 border border-border rounded-xl bg-card hover:shadow-soft transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              
              <div className="bg-muted p-6 rounded-xl border-l-4 border-primary">
                <p className="text-lg font-medium text-foreground">
                  "I've sent over 200 applications in the past 3 months and got only 2 responses."
                </p>
                <p className="text-muted-foreground mt-2">— Final year engineering student, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;