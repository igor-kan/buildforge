
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, MessageSquare, Star, Calendar, Trophy, Heart, Eye } from 'lucide-react';

const Community = () => {
  const featuredBuilders = [
    {
      name: 'Sarah Chen',
      title: 'Full-Stack Developer',
      avatar: '/placeholder.svg',
      streak: 42,
      projects: 8,
      followers: 156,
      currentProject: 'Task Management SaaS'
    },
    {
      name: 'Alex Rodriguez',
      title: 'Product Designer',
      avatar: '/placeholder.svg',
      streak: 28,
      projects: 5,
      followers: 89,
      currentProject: 'AI-Powered Landing Pages'
    },
    {
      name: 'Jordan Kim',
      title: 'Entrepreneur',
      avatar: '/placeholder.svg',
      streak: 35,
      projects: 12,
      followers: 234,
      currentProject: 'Chrome Extension'
    }
  ];

  const upcomingEvents = [
    {
      title: '24-Hour Build Challenge',
      date: 'Dec 15',
      time: '9:00 AM EST',
      participants: 127,
      type: 'Sprint'
    },
    {
      title: 'Career AMA with Google Engineer',
      date: 'Dec 18',
      time: '6:00 PM EST',
      participants: 89,
      type: 'AMA'
    },
    {
      title: 'React Deep Dive Workshop',
      date: 'Dec 20',
      time: '2:00 PM EST',
      participants: 45,
      type: 'Workshop'
    }
  ];

  const recentPosts = [
    {
      author: 'Maya Patel',
      time: '2 hours ago',
      content: 'Just deployed my first Next.js app! 🚀 The AI assistant helped me debug the trickiest parts.',
      likes: 12,
      comments: 5,
      tags: ['nextjs', 'deployment', 'milestone']
    },
    {
      author: 'David Wilson',
      time: '5 hours ago',
      content: 'Looking for an accountability partner for the 30-day SaaS challenge. Anyone interested?',
      likes: 8,
      comments: 15,
      tags: ['accountability', 'saas', 'partnership']
    },
    {
      author: 'Lisa Thompson',
      time: '1 day ago',
      content: 'Completed the AI Leverage track! The GPT integration techniques are game-changing.',
      likes: 24,
      comments: 8,
      tags: ['ai', 'completion', 'achievement']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Together, Build Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a community of builders, creators, and entrepreneurs. Share your journey, 
            get feedback, find accountability partners, and celebrate wins together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Builders */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Featured Builders</span>
                </CardTitle>
                <CardDescription>
                  Top performers this month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredBuilders.map((builder, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={builder.avatar} />
                      <AvatarFallback>{builder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-900 truncate">{builder.name}</p>
                      <p className="text-xs text-gray-500 truncate">{builder.title}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                        <span>{builder.streak}🔥</span>
                        <span>{builder.projects} projects</span>
                        <span>{builder.followers} followers</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>Upcoming Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm text-gray-900">{event.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{event.date} at {event.time}</p>
                    <div className="flex items-center space-x-2">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{event.participants} attending</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Community Feed */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span>Community Feed</span>
                </CardTitle>
                <CardDescription>
                  Latest updates from fellow builders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {recentPosts.map((post, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.time}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-red-500">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-blue-500">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center pt-4">
                  <Button variant="outline" className="w-full">
                    Load More Posts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">12,547</p>
              <p className="text-sm text-gray-500">Active Builders</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">8,934</p>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Trophy className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">1,245</p>
              <p className="text-sm text-gray-500">Jobs Landed</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <MessageSquare className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">45,678</p>
              <p className="text-sm text-gray-500">Messages Shared</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;
