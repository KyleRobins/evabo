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
      <div className="absolute inset-0 hero-gradient" aria-hidden />
      <Container className="relative grid gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="badge w-fit bg-white text-xs font-semibold uppercase tracking-wide text-brand-dark shadow">
            Empowering Responsible Waste Management
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Let&apos;s Make A Difference In Kenya&apos;s Waste Story
          </h1>
          <p className="text-base text-neutral-600 md:text-lg">
            EVABO Kenya partners with estates, corporates, schools, and counties to deliver reliable
            waste collection, recycling logistics, and environmental education. Together we keep
            resources in circulation and communities thriving.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Book A Pickup</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#services">See Our Services</Link>
            </Button>
          </div>
          <div className="grid gap-4 pt-8 sm:grid-cols-2">
            {stats.slice(0, 4).map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow">
                <p className="text-2xl font-semibold text-brand-dark">{item.value}</p>
                <p className="text-sm font-medium text-neutral-700">{item.label}</p>
                <p className="text-xs text-neutral-500">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/70 shadow-2xl shadow-brand/20"
        >
          <Image
            src="https://images.unsplash.com/photo-1580894894514-fc9ff10d3f18?auto=format&fit=crop&w=1200&q=80"
            alt="EVABO Kenya collection crew handling segregated waste bins"
            width={1200}
            height={1400}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-4 text-sm shadow-lg">
            <p className="font-semibold text-neutral-900">Verified Collection Crew</p>
            <p className="text-xs text-neutral-600">Trained & licenced under NEMA regulations</p>
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
