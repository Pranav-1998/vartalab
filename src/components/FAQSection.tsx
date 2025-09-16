import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is this only for final year students?",
    answer: "Not at all! This masterclass is designed for both pre-final and final year students. The strategies work regardless of your year, as long as you're serious about landing a job or internship."
  },
  {
    question: "Will this work if I don't have any experience?",
    answer: "Absolutely! The course is specifically designed for students with little to no work experience. We show you how to highlight your academic projects, internships, and skills in a way that attracts recruiters."
  },
  {
    question: "What if I can't attend the live session?",
    answer: "No worries! All live sessions are recorded and you'll get lifetime access to the recordings. You can watch them at your own pace and revisit them anytime."
  },
  {
    question: "How is this different from free LinkedIn content online?",
    answer: "While there's lots of free content available, this masterclass provides a structured, step-by-step system with templates, scripts, and a clear 30-day roadmap. You get everything in one place with proven frameworks."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "This is an educational masterclass focused on teaching you the skills to find jobs independently. We don't provide direct placement, but we give you all the tools and strategies to succeed on your own."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you implement the strategies and don't see any improvement in your LinkedIn presence, we'll refund your full payment."
  },
  {
    question: "How long do I have access to the materials?",
    answer: "You get lifetime access to all course materials, templates, and recordings. This means you can revisit the content anytime, even after you land your job."
  },
  {
    question: "What if I have questions during the course?",
    answer: "You'll have access to our private community where you can ask questions and get support. Plus, we have live Q&A sessions where you can get direct answers to your specific situations."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium text-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about the masterclass
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="bg-card rounded-2xl shadow-soft border p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Still have questions CTA */}
          <div className="mt-12 text-center bg-gradient-secondary p-8 rounded-2xl border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <HelpCircle className="w-5 h-5" />
                Contact Support
              </a>
              <a
                href="https://wa.me/1234567890"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;