import { Container } from '@/components/ui/container';

export function MapSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-4">
            <p className="badge bg-brand/15 text-brand-dark">Where We Operate</p>
            <h2 className="section-title">Nairobi Hub, Serving Kenya Nationwide</h2>
            <p className="section-subtitle">
              EVABO Kenya&apos;s headquarters in Embakasi coordinate our national network of collection hubs
              across Nairobi, Mombasa, Kisumu, Eldoret, and fast-growing peri-urban centres.
            </p>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="rounded-2xl bg-ash px-4 py-3">Route optimisation technology to minimise emissions.</li>
              <li className="rounded-2xl bg-ash px-4 py-3">Warehouse network with baling, shredding, and composting.</li>
              <li className="rounded-2xl bg-ash px-4 py-3">Community drop-off stations and mobile buy-back centres.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-lg">
            <iframe
              title="EVABO Kenya location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3997.759164875836!2d36.9049986!3d-1.3227109999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11f4f3490abb%3A0x7da31b5d6794c71c!2sEmbakasi%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="380"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
