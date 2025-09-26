import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <div className="flex items-center space-x-1 mr-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span>4.9/5 from 500+ businesses</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
              Automotive Business?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful dealerships using Trackaroo to streamline operations, 
            increase efficiency, and boost profitability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 text-lg px-10 py-4"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white border-white/30 hover:bg-white/10 text-lg px-10 py-4"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg">14-day free trial</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg">No setup fees</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg">Cancel anytime</span>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
            <p className="text-white font-medium">
              <strong>Limited Time:</strong> Get 3 months free when you sign up this month. 
              Save $597 on your first year!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;