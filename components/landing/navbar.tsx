"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Countries", href: "#countries" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-xl border-b",
        scrolled
          ? "bg-white/80 dark:bg-black/80 border-white/30 shadow-lg shadow-black/[0.03]"
          : "bg-white/70 dark:bg-black/70 border-white/20"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="relative z-50 flex items-center gap-1">
          <span className="text-xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-500 bg-clip-text text-transparent">
            Riseup.com
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild>
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-foreground transition-colors hover:text-violet-600"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4">
            <Button asChild size="lg">
              <a href="#waitlist" onClick={() => setMobileOpen(false)}>
                Join Waitlist
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
