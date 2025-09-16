import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    college: "COEP, Pune",
    year: "Final Year",
    content: "This roadmap simplified everything—I got my first interview in 3 weeks! The templates made LinkedIn so much easier to navigate.",
    rating: 5,
    result: "3 interviews in first month"
  },
  {
    name: "Arjun Patel",
    college: "Bharati Vidyapeeth, Pune",
    year: "Pre-final Year",
    content: "The workbook made LinkedIn so easy to use for job search. I finally understood how to network properly and showcase my skills.",
    rating: 5,
    result: "Profile views increased 400%"
  },
  {
    name: "Sneha Kulkarni",
    college: "Shivaji University, Kolhapur",
    year: "Final Year",
    content: "Hired within 30 days! The recruiter outreach strategies actually work. I wish I had found this course earlier in my college journey.",
    rating: 5,
    result: "Job offer in 30 days"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent-foreground font-medium text-sm mb-6">
              <Star className="w-4 h-4" />
              Student Success Stories
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real Results from Real Students
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how students from Tier 1 & 2 colleges transformed their job search
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-soft border hover:shadow-medium transition-all duration-300">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Student Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.year} • {testimonial.college}
                  </div>
                  
                  {/* Result Badge */}
                  <div className="mt-3 inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Social Proof Stats */}
          <div className="bg-gradient-secondary p-8 rounded-2xl border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30</div>
                <div className="text-muted-foreground">Days Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;