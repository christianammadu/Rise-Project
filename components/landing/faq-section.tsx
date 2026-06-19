import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'What is Riseup.com?',
    answer:
      'Riseup.com is a platform designed to help people across Europe and Africa discover jobs, certifications, events, language resources, and entrepreneurial support. We bring everything you need to thrive abroad into one place.',
  },
  {
    question: 'Who is Riseup.com for?',
    answer:
      "Riseup.com is for anyone looking to build a career or business across Europe and Africa — whether you're relocating, exploring opportunities, or already living abroad and want better resources.",
  },
  {
    question: 'Which countries does Riseup.com cover?',
    answer:
      'We currently focus on 12 European countries (Estonia, Finland, Latvia, Lithuania, Germany, Netherlands, Sweden, Denmark, France, Austria, Poland, Spain) and 4 African countries (Nigeria, Ghana, Kenya, South Africa), with more being added regularly.',
  },
  {
    question: 'Is Riseup.com free to use?',
    answer:
      'Riseup.com will offer a free tier with access to core resources. Premium features like personalized career guidance, interview preparation, and marketplace access will be available at affordable prices starting from €1.',
  },
  {
    question: 'When will Riseup.com launch?',
    answer:
      "We're currently building Riseup.com and plan to launch soon. Join our waitlist to be among the first to get access and help shape the platform.",
  },
  {
    question: 'How is Riseup.com different from LinkedIn or Indeed?',
    answer:
      'Unlike general job platforms, Riseup.com is specifically designed for cross-border opportunities between Europe and Africa. We go beyond job listings to provide certifications, language resources, mentorship, and community support tailored to your journey.',
  },
  {
    question: 'How does mentorship work on Riseup.com?',
    answer:
      "Our mentorship program connects you with experienced professionals who've successfully navigated the path you're on. Mentors offer guidance on everything from job hunting to cultural integration.",
  },
  {
    question: 'How can I become a mentor?',
    answer:
      "If you have experience working or building a business across Europe and Africa, we'd love to have you as a mentor. Join the waitlist and indicate your interest — we'll reach out with more details.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about Riseup.com and how it works.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border/60 py-2"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
