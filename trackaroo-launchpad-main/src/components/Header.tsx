import { useState } from 'react';
import { Menu, X, Car, Calendar, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-200/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
              <Car className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              Trackaroo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="group text-gray-600 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105 relative flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="group text-gray-600 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105 relative"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="group text-gray-600 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105 relative"
            >
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/demo">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Schedule a Demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-muted-foreground hover:text-primary transition-colors py-2 flex items-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Benefits
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-gradient-primary justify-start w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;