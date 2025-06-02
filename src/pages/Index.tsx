
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SkillTracks from '@/components/SkillTracks';
import LaunchPaths from '@/components/LaunchPaths';
import AIFeatures from '@/components/AIFeatures';
import Dashboard from '@/components/Dashboard';
import PortfolioBuilder from '@/components/PortfolioBuilder';
import Community from '@/components/Community';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SkillTracks />
      <LaunchPaths />
      <AIFeatures />
      <Dashboard />
      <PortfolioBuilder />
      <div id="community">
        <Community />
      </div>
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
