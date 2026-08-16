import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AlertsPreview } from '@/components/alerts-preview'
import { HowItWorks } from '@/components/how-it-works'
import { Benefits } from '@/components/benefits'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { RiskDisclaimer } from '@/components/risk-disclaimer'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AlertsPreview />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Faq />
        <RiskDisclaimer />
      </main>
      <SiteFooter />
    </div>
  )
}
