import { Upload, Zap, BookOpen } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Content",
    description: "Import PDFs, record lectures, or paste your notes. Our AI supports multiple formats and sources.",
    step: "01"
  },
  {
    icon: Zap,
    title: "AI Creates Cards",
    description: "Advanced AI analyzes your content and generates optimized flashcards with key concepts and questions.",
    step: "02"
  },
  {
    icon: BookOpen,
    title: "Study & Master",
    description: "Use spaced repetition to review cards at optimal intervals. Track progress and master any subject.",
    step: "03"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                BoostCards
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From content to mastery in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                    <step.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-30"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;