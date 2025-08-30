import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "Free",
    period: "14 days",
    description: "Perfect for trying out BoostCards",
    features: [
      "50 AI-generated flashcards",
      "Basic spaced repetition",
      "Single device sync",
      "PDF upload (up to 5)",
      "Voice recording (10 minutes)"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Monthly",
    price: "$1.99",
    period: "per month",
    description: "Unlimited studying power",
    features: [
      "Unlimited AI flashcards",
      "Advanced spaced repetition",
      "All device sync",
      "Unlimited PDF uploads",
      "Unlimited voice recording",
      "Priority support",
      "Export capabilities"
    ],
    cta: "Get Monthly Plan",
    popular: true
  },
  {
    name: "Lifetime",
    price: "$7.99",
    period: "one-time",
    description: "Best value for serious learners",
    features: [
      "Everything in Monthly",
      "Lifetime access",
      "Future premium features",
      "Priority customer support",
      "No recurring charges",
      "Early access to updates"
    ],
    cta: "Get Lifetime Access",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple,{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your learning goals. Start free, upgrade anytime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-primary bg-gradient-card shadow-medium' 
                    : 'border-border bg-card hover:shadow-soft'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-hero text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              All plans include a 14-day free trial. No credit card required to start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;