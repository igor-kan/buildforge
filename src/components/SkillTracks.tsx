
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Star, Settings, Users } from 'lucide-react';

const tracks = [
  {
    id: 'programming',
    title: 'Programming Mastery',
    description: 'From HTML to full-stack applications with modern frameworks',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    progress: 0,
    modules: ['HTML/CSS/JS', 'React/Next.js', 'APIs & Databases', 'DevOps Basics'],
    difficulty: 'Beginner to Advanced',
    duration: '12-16 weeks'
  },
  {
    id: 'product',
    title: 'Product Building',
    description: 'Turn ideas into real products that people want to buy',
    icon: Settings,
    color: 'from-purple-500 to-pink-500',
    progress: 0,
    modules: ['MVP Design', 'User Research', 'UI/UX Basics', 'Real-World Clones'],
    difficulty: 'Intermediate',
    duration: '8-12 weeks'
  },
  {
    id: 'ai',
    title: 'AI Leverage',
    description: 'Master modern AI tools to build smarter and faster',
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
    progress: 0,
    modules: ['GPT/Claude Usage', 'AI Workflows', 'Voice AI', 'Custom Agents'],
    difficulty: 'Beginner to Advanced',
    duration: '6-8 weeks'
  },
  {
    id: 'career',
    title: 'Career Launch',
    description: 'Get hired or launch your freelance business with confidence',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    progress: 0,
    modules: ['Portfolio Building', 'Interview Prep', 'Personal Branding', 'Job Search'],
    difficulty: 'All Levels',
    duration: '4-6 weeks'
  }
];

const SkillTracks = () => {
  return (
    <section id="tracks" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master Every Skill You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our skill tree approach ensures you learn everything in the right order, 
            with practical projects and AI assistance every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => {
            const IconComponent = track.icon;
            return (
              <Card key={track.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${track.color}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{track.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {track.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {track.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Progress</span>
                      <span>{track.progress}%</span>
                    </div>
                    <Progress value={track.progress} className="h-2" />
                    
                    <div className="grid grid-cols-2 gap-2 mt-6">
                      {track.modules.map((module, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 text-center hover:bg-purple-50 transition-colors"
                        >
                          {module}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">Duration</span>
                      <span className="text-sm font-medium text-gray-700">{track.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillTracks;
