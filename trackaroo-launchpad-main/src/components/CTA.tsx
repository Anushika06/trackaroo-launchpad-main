import { ArrowRight, CheckCircle, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-pink-100/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl" />
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold mb-8 rounded-full border border-blue-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-1 mr-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <span>4.9/5 from 500+ businesses</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Automotive Business?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Join hundreds of successful dealerships using Trackaroo to streamline operations, 
            increase efficiency, and boost profitability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
            <Link to="/demo">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Schedule a Demo
                  <Calendar className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative text-gray-700 border-2 border-gray-300 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowRight className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Learn More
            </Button>
          </div>

          {/* Feature List */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="group flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Free demo available</span>
            </div>
            <div className="group flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-purple-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-300">No setup fees</span>
            </div>
            <div className="group flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition-colors duration-300">Cancel anytime</span>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 p-6 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-gray-700 font-medium">
              <strong className="text-blue-600">Limited Time:</strong> Get 3 months free when you sign up this month. 
              Save $597 on your first year!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;