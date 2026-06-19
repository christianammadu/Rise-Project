import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const europeCountries = [
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lithuania", flag: "🇱🇹" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "France", flag: "🇫🇷" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Spain", flag: "🇪🇸" },
]

const africaCountries = [
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "South Africa", flag: "🇿🇦" },
]

const stats = [
  { value: "2", label: "Continents" },
  { value: "16", label: "Countries" },
  { value: "1", label: "Platform" },
]

export function CoverageSection() {
  return (
    <section id="countries" className="bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Coverage
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built for the Global Community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Connecting talent with opportunity across two continents.
          </p>
        </div>

        {/* Region Groups */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Europe */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <span className="text-2xl">🌍</span>
              Europe
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {europeCountries.map((country) => (
                <Badge
                  key={country.name}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm"
                >
                  {country.flag} {country.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Africa */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <span className="text-2xl">🌍</span>
              Africa
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {africaCountries.map((country) => (
                <Badge
                  key={country.name}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm"
                >
                  {country.flag} {country.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-8">
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-16 sm:block"
                />
              )}
              <div className="text-center sm:px-12">
                <p
                  className={cn(
                    "text-4xl font-bold",
                    "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent",
                    "dark:from-violet-400 dark:to-indigo-400"
                  )}
                >
                  {stat.value} {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
