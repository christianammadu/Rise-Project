'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function validateEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const trimmed = email.trim()
    if (!trimmed) {
      setStatus('error')
      setErrorMessage('Please enter your email address.')
      return
    }

    if (!validateEmail(trimmed)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: trimmed, source: 'landing_page' }])

      if (error) {
        // Supabase unique constraint violation code
        if (error.code === '23505') {
          setStatus('error')
          setErrorMessage("You're already on the waitlist!")
        } else {
          setStatus('error')
          setErrorMessage('Something went wrong. Please try again.')
        }
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 py-24 md:py-32"
    >
      {/* Decorative dot pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-purple-400/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Be the First to Experience Riseup.com
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Join our waitlist and be notified when we launch. Early members get
          exclusive access.
        </p>

        <div className="mt-10">
          {status === 'success' ? (
            <div className="animate-in zoom-in-95 fade-in flex flex-col items-center gap-3 duration-500">
              <div className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <CheckCircle className="size-8 text-white" />
              </div>
              <p className="text-xl font-semibold text-white">
                You&apos;re on the list!
              </p>
              <p className="text-white/80">
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') {
                    setStatus('idle')
                    setErrorMessage('')
                  }
                }}
                disabled={status === 'loading'}
                className={cn(
                  'h-12 w-full border-white/20 bg-white text-base text-foreground placeholder:text-muted-foreground sm:w-80',
                  'focus-visible:border-white/40 focus-visible:ring-white/30'
                )}
              />
              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading'}
                className="h-12 w-full cursor-pointer bg-white px-8 text-base font-semibold text-violet-700 hover:bg-white/90 sm:w-auto"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </Button>
            </form>
          )}

          {status === 'error' && errorMessage && (
            <p className="mt-3 text-sm font-medium text-red-200">
              {errorMessage}
            </p>
          )}
        </div>

        <p className="mt-8 text-sm text-white/60">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  )
}
