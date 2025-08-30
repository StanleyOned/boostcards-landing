import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-transformation.jpg";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-section overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Master Any Subject{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    3x Faster
                  </span>{" "}
                  with AI-Generated Flashcards
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Turn lectures, PDFs, and notes into personalized study cards instantly. 
                  Smart AI technology transforms your learning materials into effective flashcards.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Download className="w-5 h-5" />
                  Download Free on App Store
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Watch Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={heroImage} 
                  alt="Transform messy notes into clean flashcards"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-glow rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full blur-3xl opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;