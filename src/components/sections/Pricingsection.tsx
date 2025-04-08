"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PricingFeature {
  name: string
}

interface PricingTier {
  name: string
  price: number
  description: string
  buttonText: string
  features: PricingFeature[]
  popular?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for individual users",
    buttonText: "Start Free",
    features: [
      { name: "Custom domain" },
      { name: "SEO-optimizations" },
      { name: "Auto-generated API docs" },
      { name: "Built-in components library" },
    ],
  },
  {
    name: "Startup",
    price: 12,
    description: "Ideal for professionals and small teams",
    buttonText: "Upgrade to Pro",
    popular: true,
    features: [
      { name: "Custom domain" },
      { name: "SEO-optimizations" },
      { name: "Auto-generated API docs" },
      { name: "Built-in components library" },
      { name: "E-commerce integration" },
      { name: "User authentication system" },
      { name: "Multi-language support" },
      { name: "Real-time collaboration tools" },
    ],
  },
  {
    name: "Enterprise",
    price: 24,
    description: "Best for large teams and enterprise-level organizations",
    buttonText: "Contact Sales",
    features: [
      { name: "Custom domain" },
      { name: "SEO-optimizations" },
      { name: "Auto-generated API docs" },
      { name: "Built-in components library" },
      { name: "Real-time collaboration tools" },
    ],
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const getPrice = (price: number) => {
    if (price === 0) return "Free"
    const finalPrice = isYearly ? (price * 0.8).toFixed(2) : price.toFixed(2)
    return `$${finalPrice}`
  }

  return (
    <section id="pricing" className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative">
      <div className="border-b w-full h-full p-10 md:p-14">
        <div className="max-w-xl mx-auto text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance">
            Pricing that scales with you
          </h2>
          <p className="text-muted-foreground font-medium">
            Whichever plan you pick, it's free until you love your docs. That's our promise.
          </p>
        </div>
      </div>

      <div className="relative w-full h-full">
        {/* Billing Toggle */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <div className="flex w-fit items-center rounded-full border p-0.5 backdrop-blur-sm h-9 bg-muted">
            <Button
              variant="ghost"
              onClick={() => setIsYearly(false)}
              className={`px-4 h-8 z-0 ${!isYearly ? "bg-white dark:bg-zinc-700 shadow-md border" : ""}`}
            >
              <span className={`text-sm font-medium ${!isYearly ? "text-primary" : "text-muted-foreground"}`}>
                Monthly
              </span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsYearly(true)}
              className={`px-4 h-8 z-0 ${isYearly ? "bg-white dark:bg-zinc-700 shadow-md border" : ""}`}
            >
              <span className={`text-sm font-medium ${isYearly ? "text-primary" : "text-muted-foreground"}`}>
                Yearly
                <span className="ml-2 text-xs font-semibold text-secondary bg-secondary/15 py-0.5 px-1 rounded-full">
                  -20%
                </span>
              </span>
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid min-[650px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl grid grid-rows-[180px_auto_1fr] relative h-fit ${tier.popular
                ? "shadow-lg bg-accent"
                : "bg-[#F3F4F6] dark:bg-white/5 border border-border"
                }`}
            >
              {/* Top */}
              <div className="flex flex-col gap-4 p-4">
                <p className="text-sm font-medium flex items-center gap-2">
                  {tier.name}
                  {tier.popular && (
                    <span className="bg-gradient-to-r from-sky-400 to-blue-600  hover:bg-[#155dfc]/90 text-white px-2 py-0.5 rounded-full text-xs shadow">
                      Popular
                    </span>
                  )}
                </p>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-semibold">{getPrice(tier.price)}</span>
                  {tier.price !== 0 && <span className="ml-2 text-sm text-muted-foreground">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              {/* CTA */}
              <div className="p-4">
                <Button variant={"default"} className="w-full h-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:bg-[#155dfc]/90">
                  {tier.buttonText}
                </Button>
              </div>

              <hr className="border-border dark:border-white/20" />

              {/* Features */}
              <div className="p-4">
                <p className="text-sm mb-4 font-medium">Everything in Pro +</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full border flex items-center justify-center">
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 3.5L3.375 5.375L6.5 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
