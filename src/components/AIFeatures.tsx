
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Code, Settings, Users, MessageSquare } from 'lucide-react';

const aiFeatures = [
  {
    title: 'Code Assistant',
    description: 'GPT-powered debugger and pair programmer that helps you write better code faster',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    capabilities: ['Debug complex errors', 'Code review & optimization', 'Architecture suggestions', 'Live pair programming']
  },
  {
    title: 'Pitch Coach',
    description: 'Transform your app ideas into compelling elevator pitches and investor presentations',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    capabilities: ['Pitch deck generation', 'Market validation', 'Value proposition', 'Investor feedback']
  },
  {
    title: 'Marketing AI',
    description: 'Generate launch content, SEO descriptions, and marketing copy that converts',
    icon: Settings,
    color: 'from-yellow-500 to-orange-500',
    capabilities: ['Launch tweets', 'Landing pages', 'SEO optimization', 'Ad copy creation']
  },
  {
    title: 'Mentor Bot',
    description: 'Socratic questioning system that guides you to solutions instead of giving answers',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    capabilities: ['Problem-solving guidance', 'Career coaching', 'Learning path optimization', 'Goal setting']
  }
];

const AIFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-purple-200 font-medium">AI-Powered Learning</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Your AI-Powered Learning Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four specialized AI assistants work alongside you, providing personalized guidance, 
            code help, business strategy, and career coaching when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-300 mb-3">Key Capabilities:</h4>
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-purple-300">
            <span className="text-sm">Available 24/7 • No waiting • Unlimited usage with Pro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
