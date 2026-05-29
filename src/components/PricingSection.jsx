// components/PricingSection.jsx

import { Button, Card} from "@heroui/react";
import {
  RocketLaunchIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const plans = [
  {
    name: "Starter",
    price: "$0",
    icon: RocketLaunchIcon,
    features: [
      "Daily 10 match limit",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply",
    ],
  },
  {
    name: "Growth",
    price: "$17",
    popular: true,
    icon: SparklesIcon,
    features: [
      "Daily 50 match limit",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply",
    ],
  },
  {
    name: "Premium",
    price: "$99",
    icon: ShieldCheckIcon,
    features: [
      "Unlimited matches",
      "Multi-profile portfolios",
      "Advanced analytics",
      "Recruiter visibility",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm backdrop-blur">
            <span className="mr-2 h-2 w-2 rounded-full bg-violet-500" />
            PRICING
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          <div className="mt-8 flex items-center rounded-full border border-white/10 bg-white/5 p-1">
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
              Monthly
            </button>

            <button className="rounded-full px-5 py-2 text-sm text-white/70">
              Yearly
            </button>

            <span className="ml-2 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold">
              20%
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <Card
                key={plan.name}
                className={`border ${
                  plan.popular
                    ? "border-violet-500 bg-zinc-900"
                    : "border-white/10 bg-zinc-950"
                }`}
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-violet-400" />
                      <span className="text-lg font-semibold">
                        {plan.name}
                      </span>
                    </div>

                    {plan.popular && (
                      <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="mb-8">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="ml-2 text-white/50">/month</span>
                  </div>

                  <ul className="mb-10 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <CheckCircleIcon className="h-5 w-5 text-violet-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    fullWidth
                    className={`font-semibold ${
                      plan.popular
                        ? "bg-violet-600 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Choose This Plan
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}