export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-20 flex items-center justify-between">
          <div className="text-xl font-bold">TradeSpurt</div>

          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="/support" className="hover:underline">
              Support
            </a>
          </nav>
        </header>

        <section className="py-20 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Spot the Move. Trade the Momentum.
          </h1>

          <p className="mx-auto max-w-2xl text-lg">
            TradeSpurt provides market alerts and market-related information
            designed to help you stay informed about significant market moves.
          </p>
        </section>

        <section id="about" className="py-16">
          <h2 className="mb-4 text-3xl font-semibold">TradeSpurt</h2>
          <p className="max-w-3xl">
            Get clear, timely market information without having to watch the
            markets all day. TradeSpurt is designed to highlight noteworthy
            market activity and help you identify potential opportunities.
          </p>
        </section>

        <section id="pricing" className="py-16">
          <h2 className="mb-4 text-3xl font-semibold">Subscriptions</h2>
          <p>
            Subscription options are being prepared. More information will be
            available soon.
          </p>
        </section>

        <footer className="mt-20 border-t pt-8 text-sm">
          <div className="flex flex-wrap gap-6">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>

            <a href="/support" className="hover:underline">
              Support
            </a>
          </div>

          <p className="mt-6">
            TradeSpurt provides information for informational and educational
            purposes only and does not provide financial advice.
          </p>
        </footer>
      </div>
    </main>
  )
}
