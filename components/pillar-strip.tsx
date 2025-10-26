import { impactPillars } from '@/data/content';
import { Container } from '@/components/ui/container';

export function PillarStrip() {
  return (
    <section className="bg-brand-accent/90" id="about">
      <Container className="grid gap-8 py-10 md:grid-cols-3 md:gap-12">
        {impactPillars.map((pillar) => (
          <div key={pillar.title} className="space-y-2 text-neutral-900">
            <h3 className="text-lg font-semibold">{pillar.title}</h3>
            <p className="text-sm text-neutral-700">{pillar.description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
