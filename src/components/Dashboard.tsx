
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Code, Star, Users, ArrowUp, Check, Clock } from 'lucide-react';

const Dashboard = () => {
  const currentUser = {
    name: 'Alex',
    currentTrack: 'Programming Mastery',
    overallProgress: 34,
    streak: 7,
    level: 'Intermediate'
  };

  const recentActivities = [
    { title: 'Completed React Hooks Module', time: '2 hours ago', type: 'completed' },
    { title: 'Started API Integration Project', time: '1 day ago', type: 'started' },
    { title: 'Earned "Full Stack" Badge', time: '3 days ago', type: 'achievement' }
  ];

  const activeProjects = [
    { title: 'Task Manager App', progress: 75, deadline: '3 days left' },
    { title: 'Portfolio Website', progress: 45, deadline: '1 week left' },
    { title: 'API Documentation', progress: 20, deadline: '2 weeks left' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Learning Command Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your progress, manage projects, and stay motivated with comprehensive 
            analytics and personalized insights.
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      Welcome back, {currentUser.name}! 🚀
                    </CardTitle>
                    <CardDescription className="text-purple-100">
                      You're on a {currentUser.streak}-day learning streak
                    </CardDescription>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {currentUser.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Overall Progress</span>
                      <span className="font-bold">{currentUser.overallProgress}%</span>
                    </div>
                    <Progress value={currentUser.overallProgress} className="h-3 bg-white/20" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Code className="w-4 h-4" />
                    <span>Currently in: {currentUser.currentTrack}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span>Active Projects</span>
                </CardTitle>
                <CardDescription>
                  Projects you're currently building
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeProjects.map((project, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900">{project.title}</h4>
                        <span className="text-sm text-gray-500">{project.deadline}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar Content */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Code className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Start New Project
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Join Study Group
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activity.type === 'completed' ? 'bg-green-500' :
                        activity.type === 'started' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Milestone */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800 flex items-center space-x-2">
                  <ArrowUp className="w-5 h-5" />
                  <span>Next Milestone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-green-700 font-medium">
                    Complete Advanced React Module
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-600">Progress</span>
                    <span className="text-xs font-medium text-green-800">3/5 lessons</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
