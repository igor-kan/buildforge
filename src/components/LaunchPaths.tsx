
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Code, DollarSign, Users, ArrowUp } from 'lucide-react';

const launchPaths = [
  {
    id: 'saas-30',
    title: 'Build Your First SaaS in 30 Days',
    description: 'Go from idea to paying customers with a minimal viable product',
    icon: Code,
    duration: '30 Days',
    difficulty: 'Intermediate',
    price: 'Pro',
    features: [
      'Week 1: MVP Planning & Setup',
      'Week 2: Core Feature Development',
      'Week 3: UI/UX & Testing',
      'Week 4: Launch & Marketing'
    ],
    outcome: 'Live SaaS with first customers',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'dev-90',
    title: 'Zero to Junior Dev in 90 Days',
    description: 'Land your first developer job with a portfolio that gets noticed',
    icon: Users,
    duration: '90 Days',
    difficulty: 'Beginner',
    price: 'Pro',
    features: [
      'Month 1: Fundamentals & First Projects',
      'Month 2: Advanced Skills & Portfolio',
      'Month 3: Job Search & Interview Prep'
    ],
    outcome: 'Job-ready developer portfolio',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'startup-100',
    title: 'Launch a $100 Startup from Scratch',
    description: 'Build and validate a micro-business using modern tools',
    icon: DollarSign,
    duration: '21 Days',
    difficulty: 'Beginner',
    price: 'Free',
    features: [
      'Week 1: Idea Validation & Research',
      'Week 2: Quick MVP Development',
      'Week 3: Launch & First Sales'
    ],
    outcome: 'Revenue-generating business',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'career-track',
    title: 'No-CS Career Track',
    description: 'From self-taught to employed without a computer science degree',
    icon: ArrowUp,
    duration: '120 Days',
    difficulty: 'Beginner',
    price: 'Pro',
    features: [
      'Month 1-2: Core Programming Skills',
      'Month 3: Specialization & Projects',
      'Month 4: Career Preparation'
    ],
    outcome: 'Tech career transition',
    color: 'from-purple-500 to-pink-500'
  }
];

const LaunchPaths = () => {
  return (
    <section id="paths" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Guided Launch Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your adventure. Each path is designed to get you real results 
            in record time with step-by-step guidance and milestone tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {launchPaths.map((path) => {
            const IconComponent = path.icon;
            const isFree = path.price === 'Free';
            
            return (
              <Card key={path.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 relative overflow-hidden">
                {isFree && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-green-500 text-white">Free</Badge>
                  </div>
                )}
                
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${path.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${path.color}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant="outline">{path.duration}</Badge>
                        <Badge variant="secondary">{path.difficulty}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {path.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {path.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Do:</h4>
                    <ul className="space-y-2">
                      {path.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold text-purple-900">Outcome:</span>
                    </div>
                    <span className="text-purple-800">{path.outcome}</span>
                  </div>
                  
                  <Button 
                    className={`w-full ${isFree ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'} text-white`}
                  >
                    {isFree ? 'Start Free Path' : 'Start Pro Path'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LaunchPaths;
