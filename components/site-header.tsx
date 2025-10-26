'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { navLinks } from '@/data/content';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/70 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-brand-dark">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white font-bold">E</span>
          <span>EVABO Kenya</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-brand-dark">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="#contact">Get Quote</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 text-neutral-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      <div
        className={cn(
          'border-t border-neutral-100 bg-white md:hidden',
          open ? 'max-h-72 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        )}
      >
        <Container className="flex flex-col gap-3 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button onClick={() => setOpen(false)} asChild>
            <Link href="#contact">Get Quote</Link>
          </Button>
        </Container>
      </div>
    </header>
  );
}
