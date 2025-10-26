'use client';

import { useState, useTransition } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

import { contactInfo } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { ContactFormResponse } from '@/lib/types';

interface ContactSectionProps {
  contactAction: (formData: FormData) => Promise<ContactFormResponse>;
}

export function ContactSection({ contactAction }: ContactSectionProps) {
  const [status, setStatus] = useState<ContactFormResponse | null>(null);
  const [pending, startTransition] = useTransition();

  const onSubmit = (formData: FormData) => {
    setStatus(null);
    startTransition(async () => {
      const response = await contactAction(formData);
      setStatus(response);
    });
  };

  return (
    <section id="contact" className="bg-ash py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-4">
          <p className="badge bg-brand/15 text-brand-dark">Talk To Us</p>
          <h2 className="section-title">Ready To Build A Responsible Waste Strategy?</h2>
          <p className="section-subtitle">
            Share your needs and our sustainability advisors will schedule a walkthrough within 48
            hours. We customise sorting, collection, and recycling programs for estates, corporates,
            and institutions.
          </p>
          <div className="rounded-3xl bg-white p-6 shadow">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
              Direct Contacts
            </h3>
            <div className="mt-3 space-y-2 text-sm text-neutral-700">
              <p>{contactInfo.addressLine}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>
        <form action={onSubmit} className="space-y-5 rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Jane Mwangi" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Organisation</Label>
              <Input id="company" name="company" placeholder="Your company or estate" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="hello@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" placeholder="0700 000 000" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">How can we support you?</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your waste streams, pickup frequency, or sustainability goals."
              rows={5}
            />
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={pending}>
            {pending ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </Button>
          {status ? (
            <div
              className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm ${
                status.success ? 'bg-brand/10 text-brand-dark' : 'bg-red-100 text-red-700'
              }`}
            >
              {status.success ? <CheckCircle2 className="h-4 w-4" /> : null}
              <span>{status.message}</span>
            </div>
          ) : null}
        </form>
      </Container>
    </section>
  );
}
