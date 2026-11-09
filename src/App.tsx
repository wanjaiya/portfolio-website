import { useState } from 'react'
import { HeroSection } from './components/HeroSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechStack } from './components/TechStack';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
function App() {


  return (
   <div className="min-h-screen bg-[#0A0A0A]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <HeroSection />
      <FeaturedProjects />
      <TechStack />
      <EngineeringPhilosophy />
      <ExperienceTimeline />
      <ContactSection />
    </div>
  )
}

export default App
