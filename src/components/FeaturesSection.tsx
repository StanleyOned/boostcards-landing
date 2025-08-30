import { Mic, FileText, Brain, Cloud } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice to Cards",
    description: "Record lectures and get instant flashcards. Our AI extracts key concepts and creates study-ready cards automatically.",
    color: "text-purple-500"
  },
  {
    icon: FileText,
    title: "PDF to Study Set",
    description: "Upload documents and let AI extract important concepts. Transform textbooks and papers into digestible flashcards.",
    color: "text-blue-500"
  },
  {
    icon: Brain,
    title: "Smart Repetition",
    description: "Science-backed spaced repetition algorithm adapts to your learning pace and optimizes review timing.",
    color: "text-indigo-500"
  },
  {
    icon: Cloud,
    title: "Sync Everywhere",
    description: "Seamless synchronization across iPhone, iPad, and Mac. Study anywhere, anytime with real-time syncing.",
    color: "text-violet-500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Study Smarter
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful AI features designed to transform how you learn and retain information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-card border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;