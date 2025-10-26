import Link from 'next/link';

import { contactInfo, navLinks } from '@/data/content';
import { Container } from '@/components/ui/container';

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <Link href="#" className="flex items-center gap-3 text-lg font-semibold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent text-brand-dark font-bold">
              E
            </span>
            EVABO Kenya
          </Link>
          <p className="text-sm text-white/70">
            Empowering responsible waste management across Kenya through collection, recycling, and
            circular economy partnerships.
          </p>
          <div className="flex gap-4 text-sm text-white/60">
            <span>{contactInfo.phone}</span>
            <span>{contactInfo.email}</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact</h4>
            <p className="mt-2 text-sm text-white/70">{contactInfo.addressLine}</p>
            <Link href="#contact" className="mt-4 inline-flex items-center text-sm font-semibold text-brand-accent">
              Talk to EVABO
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/20 py-4">
        <Container className="flex flex-col gap-2 text-xs text-white/60 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} EVABO Kenya. All rights reserved.</span>
          <span>Crafted with care for people and planet.</span>
        </Container>
      </div>
    </footer>
  );
}
