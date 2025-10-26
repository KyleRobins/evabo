import { plans } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';

export function PricingSection() {
  return (
    <section id="plans" className="bg-white py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="badge mx-auto w-fit bg-brand/15 text-brand-dark">Simple Plans</p>
          <h2 className="section-title">Simplified Waste Management</h2>
          <p className="section-subtitle">
            Choose the right plan for your household, estate, or organisation and let EVABO handle the
            rest with transparent reporting.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlighted ? 'border-brand bg-brand/5 shadow-glow' : 'bg-ash/40'}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-semibold">
                  {plan.name}
                  {plan.highlighted ? (
                    <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase text-white">
                      Most Popular
                    </span>
                  ) : null}
                </CardTitle>
                <CardDescription className="text-base text-neutral-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-3xl font-bold text-brand-dark">{plan.price}</p>
                <ul className="space-y-3 text-sm text-neutral-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="rounded-2xl bg-white px-4 py-3">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
