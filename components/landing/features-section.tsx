import {
  Briefcase,
  Compass,
  Award,
  BookOpen,
  Calendar,
  Rocket,
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Briefcase,
    title: "Curated Job Opportunities",
    description:
      "Discover opportunities tailored to your goals and preferred countries. No noise, just relevant listings.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    description:
      "Get clear direction on career paths, required qualifications, and steps to succeed in your target country.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Find out which certifications and qualifications you need — and where to get them.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: BookOpen,
    title: "Language Resources",
    description:
      "Access language learning resources to help you communicate and integrate in your new home.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Calendar,
    title: "Events & Networking",
    description:
      "Discover career fairs, workshops, and networking events in your target country.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description:
      "Resources and support for starting and growing your business abroad.",
    gradient: "from-indigo-500 to-violet-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Everything You Need, One Platform
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From job discovery to career growth — Riseup.com brings it all together.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={cn(
                  "rounded-xl border bg-card p-8",
                  "hover:bg-white/80 dark:hover:bg-white/5",
                  "hover:-translate-y-1 hover:shadow-xl",
                  "transition-all duration-300"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br",
                    feature.gradient
                  )}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>

                {/* Description */}
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
