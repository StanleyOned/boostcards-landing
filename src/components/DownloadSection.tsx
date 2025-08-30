import { Button } from "@/components/ui/button";
import { Download, Smartphone, Tablet, Monitor } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Download{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                BoostCards
              </span>{" "}
              Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Available on all your devices. Start studying smarter with AI-powered flashcards.
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">iPhone</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Tablet className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">iPad</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Mac</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5" />
              Download for Mac
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Coming soon to Android and Windows. 
              <a href="#" className="text-primary hover:underline ml-1">
                Join the waitlist
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;