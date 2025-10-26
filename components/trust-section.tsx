import Link from 'next/link';
import Image from 'next/image';

import { differentiators } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function TrustSection() {
  const highlight = differentiators[0];

  return (
    <section className="bg-white py-20" id="impact">
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <p className="badge w-fit bg-brand/15 text-brand-dark">{highlight.badge}</p>
          <h2 className="section-title">{highlight.title}</h2>
          <p className="section-subtitle max-w-xl">{highlight.copy}</p>
          <ul className="grid gap-3 text-sm text-neutral-700">
            {highlight.points.map((point) => (
              <li key={point} className="rounded-2xl bg-ash px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-4 w-fit">
            <Link href={highlight.cta.href}>{highlight.cta.label}</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-brand-dark p-1">
          <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="EVABO team sorting recyclables at materials recovery facility"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 text-sm">
              <p className="font-semibold text-neutral-900">Certified handlers</p>
              <p className="text-xs text-neutral-600">All staff trained in safe material recovery</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
