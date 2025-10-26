import { HeroSection } from '@/components/hero-section';
import { PillarStrip } from '@/components/pillar-strip';
import { ServicesSection } from '@/components/services-section';
import { TrustSection } from '@/components/trust-section';
import { ExperienceStrip } from '@/components/experience-strip';
import { MetricsShowcase } from '@/components/metrics-showcase';
import { PricingSection } from '@/components/pricing-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { BlogSection } from '@/components/blog-section';
import { MapSection } from '@/components/map-section';
import { FAQSection } from '@/components/faq-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { sendContactEmail } from '@/app/actions/send-email';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PillarStrip />
        <TrustSection />
        <ExperienceStrip />
        <ServicesSection />
        <MetricsShowcase />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
        <MapSection />
        <ContactSection contactAction={sendContactEmail} />
      </main>
      <SiteFooter />
    </div>
  );
}
