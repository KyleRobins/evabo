'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { services } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function ServicesSection() {
  return (
    <section id="services" className="bg-charcoal py-20 text-white">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="badge bg-brand-teal/20 text-brand-teal-light">
              Waste Management Solutions
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white/50 md:text-4xl">
              Tailored Recycling Programs For You
            </h2>
            <p className="section-subtitle text-white/80">
              From zero-waste estates to corporate recycling loops, EVABO crafts practical,
              data-backed interventions for every partner.
            </p>
          </div>
          <Button variant="secondary" className="bg-white text-charcoal hover:bg-ash" asChild>
            <Link href="#contact">Request Custom Plan</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-white/70">{service.description}</p>
                <Button variant="ghost" className="gap-2 rounded-full px-0 text-white">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
