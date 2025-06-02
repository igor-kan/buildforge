
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, ExternalLink, Github, Globe, Star, Download, Eye, Share } from 'lucide-react';

const PortfolioBuilder = () => {
  const portfolioData = {
    completionRate: 75,
    totalProjects: 12,
    publicProjects: 8,
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'],
    certificates: 5
  };

  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Full-stack admin panel with real-time analytics',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      status: 'completed',
      image: '/placeholder.svg',
      liveUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/user/project',
      featured: true
    },
    {
      id: 2,
      title: 'AI Chat Interface',
      description: 'ChatGPT-like interface with custom API integration',
      tech: ['Next.js', 'OpenAI API', 'Tailwind'],
      status: 'completed',
      image: '/placeholder.svg',
      liveUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/user/project',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      tech: ['Vue.js', 'Firebase', 'SCSS'],
      status: 'in-progress',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com/user/project',
      featured: false
    }
  ];

  const certificates = [
    { name: 'Full-Stack Development', issuer: 'BuildForge', date: '2024-11' },
    { name: 'React Mastery', issuer: 'BuildForge', date: '2024-10' },
    { name: 'AI Integration', issuer: 'BuildForge', date: '2024-09' },
    { name: 'Product Building', issuer: 'BuildForge', date: '2024-08' },
    { name: 'Marketing Fundamentals', issuer: 'BuildForge', date: '2024-07' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Auto-Generated Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase your skills and projects with an AI-powered portfolio that updates 
            automatically as you complete challenges and build projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Overview */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span>Portfolio Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Completion</span>
                    <span className="text-sm font-semibold">{portfolioData.completionRate}%</span>
                  </div>
                  <Progress value={portfolioData.completionRate} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">{portfolioData.totalProjects}</p>
                    <p className="text-xs text-gray-500">Total Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{portfolioData.publicProjects}</p>
                    <p className="text-xs text-gray-500">Public Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{portfolioData.skills.length}</p>
                    <p className="text-xs text-gray-500">Skills</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{portfolioData.certificates}</p>
                    <p className="text-xs text-gray-500">Certificates</p>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="projects" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Featured Projects</h3>
                  <Button size="sm" variant="outline">
                    <Code className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="flex">
                        <div className="w-32 h-24 bg-gray-200 flex-shrink-0">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                                <span>{project.title}</span>
                                {project.featured && <Star className="w-4 h-4 text-yellow-500" />}
                              </h4>
                              <p className="text-sm text-gray-600">{project.description}</p>
                            </div>
                            <Badge 
                              variant={project.status === 'completed' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.tech.map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex space-x-2">
                            {project.liveUrl && (
                              <Button size="sm" variant="outline" className="text-xs">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Live Demo
                              </Button>
                            )}
                            <Button size="sm" variant="outline" className="text-xs">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Earned Certificates</h3>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {certificates.map((cert, index) => (
                    <Card key={index}>
                      <CardContent className="flex items-center justify-between p-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                          <p className="text-sm text-gray-600">Issued by {cert.issuer} • {cert.date}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <h3 className="text-xl font-semibold">Portfolio Settings</h3>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Visibility & Sharing</CardTitle>
                    <CardDescription>
                      Control who can see your portfolio and projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Public Portfolio</p>
                        <p className="text-sm text-gray-500">Make your portfolio visible to everyone</p>
                      </div>
                      <Button size="sm" variant="outline">Toggle</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">GitHub Integration</p>
                        <p className="text-sm text-gray-500">Automatically sync with your GitHub repos</p>
                      </div>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Custom Domain</p>
                        <p className="text-sm text-gray-500">Use your own domain for your portfolio</p>
                      </div>
                      <Button size="sm" variant="outline">Setup</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBuilder;
