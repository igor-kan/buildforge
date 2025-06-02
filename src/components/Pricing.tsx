
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Starter',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with coding',
      icon: Star,
      color: 'from-gray-500 to-gray-600',
      features: [
        'Access to core programming tracks',
        'Basic project templates',
        'Community access',
        'Progress tracking',
        'Certificate of completion',
        'Public portfolio'
      ],
      limitations: [
        'Limited AI assistant usage',
        'No mentor access',
        'Basic templates only'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Pro Builder',
      price: '$19',
      period: 'per month',
      description: 'For serious builders and career changers',
      icon: Zap,
      color: 'from-purple-500 to-blue-500',
      features: [
        'Everything in Free',
        'All launch paths unlocked',
        'Unlimited AI assistant usage',
        'Priority mentor support',
        'Advanced project templates',
        'Interview prep & job search tools',
        'Custom portfolio domain',
        'Weekly build challenges',
        'Accountability partner matching'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      popular: true,
      trialDays: 7
    },
    {
      name: 'Elite Entrepreneur',
      price: '$49',
      period: 'per month',
      description: 'For launching businesses and scaling fast',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Everything in Pro',
        'One-on-one mentor sessions',
        'Business plan generator',
        'Advanced marketing tools',
        'Investor pitch deck templates',
        'Revenue tracking & analytics',
        'White-label portfolio options',
        'Priority community features',
        'Custom learning paths',
        'API access for integrations'
      ],
      limitations: [],
      cta: 'Go Elite',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What happens to my projects if I downgrade?',
      answer: 'Your projects remain yours forever. You just lose access to premium features and templates.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with your Pro or Elite plan.'
    },
    {
      question: 'Is there a student discount?',
      answer: 'Yes! Students get 50% off Pro and Elite plans. Contact support with your .edu email.'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade when you're ready to accelerate your career. 
            All plans include lifetime access to completed content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-2 border-purple-400 shadow-2xl shadow-purple-500/25' : 'border border-gray-700'} bg-white/5 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-300">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {plan.cta}
                    {plan.trialDays && (
                      <span className="ml-2 text-xs opacity-75">
                        ({plan.trialDays}-day trial)
                      </span>
                    )}
                  </Button>
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-400 mb-2">Limitations:</p>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <p key={limitIndex} className="text-xs text-gray-500">
                          • {limitation}
                        </p>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border border-gray-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                  <p className="text-gray-300 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
