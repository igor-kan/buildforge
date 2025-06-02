
import { Code, Star, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                <Code className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                BuildForge
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Learn. Build. Sell. Succeed—at startup speed.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Users className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Star className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Learning Tracks */}
          <div>
            <h4 className="font-semibold text-white mb-4">Learning Tracks</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Programming Mastery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Product Building</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">AI Leverage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Career Launch</a></li>
            </ul>
          </div>

          {/* Launch Paths */}
          <div>
            <h4 className="font-semibold text-white mb-4">Launch Paths</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">30-Day SaaS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">90-Day Dev Career</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">$100 Startup</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">No-CS Career Track</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BuildForge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
