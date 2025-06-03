
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Trusted
              <span className="text-blue-600 block">Freight Partner</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cornett Freight Brokerage connects shippers with reliable carriers nationwide. 
              We deliver cost-effective transportation solutions with personalized service 
              and real-time tracking.
            </p>
            
            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Best Rates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Freight trucks and logistics"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
