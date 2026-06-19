import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 lg:px-8"
    >
      {/* ── Animated gradient mesh background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(99,102,241,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(245,158,11,0.10) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 60% 100%, rgba(139,92,246,0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* ── Decorative floating blobs ── */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-24 -left-24 size-72 rounded-full opacity-30 blur-3xl",
          "bg-violet-400/40 animate-[float_8s_ease-in-out_infinite]"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-1/3 -right-16 size-64 rounded-full opacity-20 blur-3xl",
          "bg-indigo-400/40 animate-[float_10s_ease-in-out_infinite_1s]"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -bottom-16 left-1/4 size-56 rounded-full opacity-20 blur-3xl",
          "bg-amber-300/40 animate-[float_12s_ease-in-out_infinite_2s]"
        )}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <Badge
          variant="outline"
          className="mb-6 animate-[fadeInUp_0.6s_ease-out_both] border-violet-200 bg-violet-50/60 text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300"
        >
          🚀 Launching Soon
        </Badge>

        {/* Headline */}
        <h1 className="animate-[fadeInUp_0.6s_ease-out_0.1s_both] text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          Your Bridge to Opportunity
          <br className="hidden sm:block" />
          <span className="mt-1 inline-block"> Across{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-amber-500 bg-clip-text text-transparent">
              Europe&nbsp;&amp;&nbsp;Africa
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.2s_both] text-lg leading-relaxed text-muted-foreground md:text-xl">
          Discover jobs, build skills, earn certifications, and connect with
          mentors — everything you need to thrive abroad, in one platform.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex animate-[fadeInUp_0.6s_ease-out_0.3s_both] flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="px-6 text-base">
            <a href="#waitlist">Join the Waitlist</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6 text-base">
            <a href="#how-it-works">Learn More</a>
          </Button>
        </div>

        {/* Country flags */}
        <p className="mt-12 animate-[fadeInUp_0.6s_ease-out_0.4s_both] text-sm tracking-wide text-muted-foreground">
          <span className="mr-1 text-base" aria-label="Country flags">
            🇪🇪 🇫🇮 🇩🇪 🇳🇱 🇬🇧 🇫🇷 🇳🇬 🇬🇭 🇰🇪 🇿🇦
          </span>{" "}
          and 20+ countries
        </p>
      </div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
