import { Search, Languages, Users, FileWarning } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const painPoints = [
  {
    icon: Search,
    title: "Scattered Resources",
    description:
      "Job listings, visa info, and certifications are spread across dozens of websites and forums. Hours wasted searching.",
  },
  {
    icon: Languages,
    title: "Language Barriers",
    description:
      "Moving to a new country means navigating a new language with little structured support or guidance.",
  },
  {
    icon: Users,
    title: "No Community Support",
    description:
      "Starting over in a new country is isolating. Finding mentors and peers who understand your journey is nearly impossible.",
  },
  {
    icon: FileWarning,
    title: "Missing Local Knowledge",
    description:
      "Every country has different requirements — certifications, regulations, cultural norms — that are hard to figure out alone.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="bg-muted/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
            The Problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Finding Opportunities Abroad Shouldn&apos;t Be This Hard
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {painPoints.map((point) => {
            const Icon = point.icon
            return (
              <Card
                key={point.title}
                className={cn(
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-lg"
                )}
              >
                <CardHeader>
                  <div className="mb-2 flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {point.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
