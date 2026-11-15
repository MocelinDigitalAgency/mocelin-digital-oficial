/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClientsMarqueeSection } from './components/ClientsMarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ImpactMetricsSection } from './components/ImpactMetricsSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CaseStudies } from './components/CaseStudies';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { TrustBadgesSection } from './components/TrustBadgesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[#FAF8F9] dark:bg-[#060508] text-[#141018] dark:text-[#F5F2EB] flex flex-col transition-colors duration-200">
          <ScrollProgressBar />
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <ClientsMarqueeSection />
            <AboutSection />
            <ImpactMetricsSection />
            <ServicesSection />
            <PortfolioSection />
            <CaseStudies />
            <TestimonialsSection />
            <PricingSection />
            <TrustBadgesSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTopButton />
          <FloatingWhatsApp />
        </div>
      </MotionConfig>
    </ThemeProvider>
    </LanguageProvider>
  );
}
