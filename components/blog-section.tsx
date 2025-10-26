import Image from 'next/image';
import Link from 'next/link';

import { blogPosts } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function BlogSection() {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="news" className="bg-white py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="badge bg-brand/15 text-brand-dark">Latest Insights</p>
            <h2 className="section-title">Our Articles & Field Notes</h2>
            <p className="section-subtitle">
              Stories from the frontline of Kenya&apos;s circular economy and practical tips to embed
              sustainability.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link href="#">Visit Blog</Link>
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-neutral-200">
            <div className="relative h-72 w-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1200px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-6">
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
                {featured.category}
              </span>
              <h3 className="text-2xl font-semibold text-neutral-900">{featured.title}</h3>
              <p className="text-sm text-neutral-600">{featured.excerpt}</p>
              <Button variant="outline" asChild>
                <Link href={featured.href}>Read Article</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {rest.map((post) => (
              <div key={post.title} className="flex gap-4 overflow-hidden rounded-3xl border border-neutral-200 bg-ash/60 p-4">
                <div className="relative h-28 w-32 flex-shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900">{post.title}</h3>
                  <p className="flex-1 text-sm text-neutral-600">{post.excerpt}</p>
                  <Link href={post.href} className="text-sm font-semibold text-brand-dark">
                    Continue reading →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
