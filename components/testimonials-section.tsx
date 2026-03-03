'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

import { testimonials } from '@/data/content';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Container } from '@/components/ui/container';

export function TestimonialsSection() {
  return (
    <section className="bg-charcoal py-20 text-white">
      <Container>
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="badge bg-brand-teal/20 text-brand-teal-light">Hear It From Our Clients</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white/50 md:text-4xl">Waste Management Partners Love Working With EVABO</h2>
            <p className="section-subtitle text-white/80">
              Partners across Kenya trust EVABO for dependable collections, transparent data, and
              compliance peace of mind.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-black/30 p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-yellow-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-white/90">{testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/70">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
