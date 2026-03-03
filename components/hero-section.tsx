'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { heroLogos, stats } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ash">
      <Image
        src="https://images.unsplash.com/photo-1717667745836-145a38948ebf?auto=format&fit=crop&w=1600&q=80"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 -z-10 hero-gradient opacity-70" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-white/80" aria-hidden />
      <Container className="relative z-10 flex flex-col items-center gap-10 py-16 text-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex max-w-3xl flex-col items-center space-y-6"
        >
          <div className="badge mx-auto w-fit bg-white/90 text-xs font-semibold uppercase tracking-wide text-brand-dark shadow">
            Empowering Responsible Waste Management
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Let&apos;s Make A Difference In Kenya&apos;s Waste Story
          </h1>
          <p className="text-base text-neutral-700 md:text-lg">
            EVABO Kenya partners with estates, corporates, schools, and counties to deliver reliable
            waste collection, recycling logistics, and environmental education. Together we keep
            resources in circulation and communities thriving.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Book A Pickup</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#services">See Our Services</Link>
            </Button>
          </div>
          <div className="grid w-full max-w-5xl gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.slice(0, 4).map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow"
              >
                <p className="text-2xl font-semibold text-brand-dark">{item.value}</p>
                <p className="text-sm font-medium text-neutral-700">{item.label}</p>
                <p className="text-xs text-neutral-500">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>

      <div className="border-t border-neutral-200 bg-white/60 py-6">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold text-neutral-600">Trusted by impact-driven organisations:</p>
          <div className="flex flex-wrap items-center gap-4">
            {heroLogos.map((partner) => (
              <div key={partner.name} className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
