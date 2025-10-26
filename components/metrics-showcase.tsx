import Image from 'next/image';

import { metrics } from '@/data/content';
import { Container } from '@/components/ui/container';

export function MetricsShowcase() {
  return (
    <section className="bg-brand-dark py-20 text-white">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[36px]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=1400&q=80"
              alt="EVABO recycling truck"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
            <button className="absolute left-8 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-full bg-white/95 px-5 py-3 text-sm font-semibold text-brand-dark shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">▶</span>
              Watch impact film
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <p className="badge w-fit bg-brand-teal/20 text-brand-teal-light">Our Impact</p>
          <h2 className="section-title text-white">From Bin To Bottle, A Journey Through Recycling</h2>
          <p className="section-subtitle text-white/80">
            Each collection route is tracked, weighed, and reported. EVABO keeps materials in productive
            use while creating decent jobs for youth and women-led enterprises.
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.name} className="rounded-[28px] bg-white/10 p-4">
                <p className="text-xl font-semibold text-white">{metric.value}</p>
                <p className="text-sm font-medium text-white/90">{metric.name}</p>
                <p className="text-xs text-white/70">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
