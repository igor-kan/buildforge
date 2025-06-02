
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                BuildForge
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Learn. Build. Sell. Succeed.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tracks" className="text-gray-700 hover:text-purple-600 transition-colors">Tracks</a>
            <a href="#paths" className="text-gray-700 hover:text-purple-600 transition-colors">Launch Paths</a>
            <a href="#community" className="text-gray-700 hover:text-purple-600 transition-colors">Community</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Start Learning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#tracks" className="text-gray-700 hover:text-purple-600">Tracks</a>
              <a href="#paths" className="text-gray-700 hover:text-purple-600">Launch Paths</a>
              <a href="#community" className="text-gray-700 hover:text-purple-600">Community</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600">Pricing</a>
              <div className="pt-4 border-t border-gray-200">
                <Button variant="ghost" className="w-full mb-2">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Start Learning
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
