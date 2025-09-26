import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Trusted by 500+ Automotive Businesses
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            Complete Automotive
            <span className="block text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
              Business Management
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Streamline your dealership operations with our comprehensive ERP platform. 
            Manage inventory, staff, expenses, and customer relationships all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 text-lg px-8 py-4"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center space-x-8 text-blue-200 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;