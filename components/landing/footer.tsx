import { ArrowUp } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Countries', href: '#countries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Waitlist', href: '#waitlist' },
]

const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

function FooterLinkList({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* 4-column grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-xl font-bold text-foreground">
              Riseup.com
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your bridge to opportunity across Europe &amp; Africa.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <TwitterIcon className="size-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Column 2 — Product */}
          <FooterLinkList title="Product" links={productLinks} />

          {/* Column 3 — Company */}
          <FooterLinkList title="Company" links={companyLinks} />

          {/* Column 4 — Legal */}
          <FooterLinkList title="Legal" links={legalLinks} />
        </div>

        {/* Separator */}
        <Separator className="my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Riseup.com. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for the diaspora
          </p>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#"
        aria-label="Back to top"
        className="fixed right-6 bottom-6 z-50 flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-md transition-colors hover:bg-muted hover:text-foreground"
      >
        <ArrowUp className="size-4" />
      </a>
    </footer>
  )
}
