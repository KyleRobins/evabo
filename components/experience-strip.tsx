import { Leaf, Recycle, ShieldCheck } from 'lucide-react';

import { experienceHighlights } from '@/data/content';
import { Container } from '@/components/ui/container';

const iconMap = {
  Leaf,
  Recycle,
  ShieldCheck
};

export function ExperienceStrip() {
  return (
    <section className="bg-ash py-16">
      <Container className="grid gap-6 md:grid-cols-3">
        {experienceHighlights.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand-dark">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
