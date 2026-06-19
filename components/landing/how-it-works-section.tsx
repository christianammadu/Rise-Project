import { cn } from "@/lib/utils"

const steps = [
  {
    number: 1,
    title: "Choose Your Destination",
    description:
      "Select your target country in Europe or Africa and explore what's available.",
  },
  {
    number: 2,
    title: "Discover Opportunities",
    description:
      "Browse curated job listings, events, and resources tailored to your destination.",
  },
  {
    number: 3,
    title: "Build Local Skills",
    description:
      "Find the certifications and language resources you need to qualify and thrive.",
  },
  {
    number: 4,
    title: "Connect With Mentors",
    description:
      "Join a community of people who've walked your path and are ready to help.",
  },
  {
    number: 5,
    title: "Grow Your Career",
    description:
      "Land opportunities, build your network, and grow your career or business abroad.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Your Path to Success
          </h2>
        </div>

        {/* Desktop: Horizontal timeline (hidden on mobile) */}
        <div className="hidden lg:block">
          {/* Step circles + connecting lines */}
          <div className="relative flex items-start justify-between">
            {/* Connecting line behind all circles */}
            <div
              className="absolute top-6 right-10 left-10 h-0.5"
              style={{
                background:
                  "linear-gradient(to right, oklch(0.55 0.2 280), oklch(0.45 0.2 265))",
              }}
              aria-hidden="true"
            />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative z-10 flex flex-1 flex-col items-center text-center"
              >
                {/* Numbered circle */}
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg",
                    "bg-gradient-to-br from-violet-600 to-indigo-600"
                  )}
                >
                  {step.number}
                </div>

                {/* Step content */}
                <div className="mt-6 max-w-[200px]">
                  <h3 className="text-base font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline (hidden on desktop) */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical connecting line */}
            <div
              className="absolute top-0 bottom-0 left-6 w-0.5 -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.55 0.2 280), oklch(0.45 0.2 265))",
              }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-6">
                  {/* Numbered circle */}
                  <div
                    className={cn(
                      "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg",
                      "bg-gradient-to-br from-violet-600 to-indigo-600"
                    )}
                  >
                    {step.number}
                  </div>

                  {/* Step content */}
                  <div className="pt-1.5 pb-2">
                    <h3 className="text-base font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
