'use client'

import { useState } from 'react'
import { Activity, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Market Alerts', href: '#alerts' },
  { label: 'Pricing', href: '#pricing' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/30">
            <Activity className="h-4 w-4 text-primary" aria-hidden="true" />
          </span>
          <span className="font-mono text-lg font-semibold tracking-tight">
            Trade<span className="text-primary">Spurt</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            nativeButton={false}
            render={<a href="#signin" />}
          >
            Sign In
          </Button>
          <Button size="sm" nativeButton={false} render={<a href="#pricing" />}>
            Get TradeSpurt Alerts
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button
                variant="secondary"
                nativeButton={false}
                render={<a href="#signin" onClick={() => setOpen(false)} />}
              >
                Sign In
              </Button>
              <Button
                nativeButton={false}
                render={<a href="#pricing" onClick={() => setOpen(false)} />}
              >
                Get TradeSpurt Alerts
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
