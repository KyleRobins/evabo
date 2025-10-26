'use client';

import { motion } from 'framer-motion';

import { faqs } from '@/data/content';
import { Container } from '@/components/ui/container';

export function FAQSection() {
  return (
    <section className="bg-ash py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="badge mx-auto w-fit bg-brand/15 text-brand-dark">FAQs</p>
          <h2 className="section-title">Answers To Common Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about onboarding, compliance, and working with EVABO Kenya.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{item.question}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
