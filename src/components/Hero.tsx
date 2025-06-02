
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Code, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Launch Badge */}
        <div className="mb-8">
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Now Live - Join the Beta
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Learn. Build. Sell.
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Succeed
          </span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-600">
            —at startup speed.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          The all-in-one platform that takes you from zero to profitable developer, product builder, and entrepreneur faster than any traditional path.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>30-day SaaS launches</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>90-day career pivots</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>AI-powered learning</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
          >
            <Code className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg"
          >
            Watch Demo
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Discover your learning path</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
