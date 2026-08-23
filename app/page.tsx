export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="flex items-center justify-between">
          <div className="text-3xl font-bold">TradeSpurt</div>

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
          <div className="mb-6 text-5xl font-bold">
            Spot the Move. Trade the Moment.
          </div>

          <p className="mx-auto mb-8 max-w-2xl text-lg">
            AI-powered trading alerts and market insights designed to help you
            identify opportunities faster and make more informed trading
            decisions.
          </p>

          <a
            href="#pricing"
            className="inline-block rounded-lg bg-black px-7 py-3 font-semibold text-white"
          >
            View Plans
          </a>
        </section>

        <section id="about" className="py-16 text-center">
          <h2 className="mb-6 text-3xl font-bold">Trade Smarter</h2>

          <p className="mx-auto max-w-3xl text-lg">
            TradeSpurt uses AI-powered analysis to monitor market activity and
            highlight potential trading opportunities. Get clear, timely
            insights without spending hours analysing the markets yourself.
          </p>
        </section>

        <section id="pricing" className="py-16 text-center">
          <h2 className="mb-10 text-3xl font-bold">Simple Pricing</h2>

          <div className="mx-auto max-w-md rounded-2xl border p-8 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold">TradeSpurt Pro</h3>

            <div className="mb-5 text-4xl font-bold">
              £19.99
              <span className="text-base font-normal"> / month</span>
            </div>

            <p className="mb-6">
              AI-powered trading alerts, market insights and access to the
              TradeSpurt subscriber service.
            </p>

            <a
              href="#"
              className="inline-block rounded-lg bg-black px-7 py-3 font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </section>

        <footer className="mt-16 border-t pt-8 text-center text-sm">
          <p className="mb-4">
            Trading involves risk. TradeSpurt provides market information and
            alerts for informational purposes only and does not provide
            financial advice.
          </p>

          <div className="flex justify-center gap-6">
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

          <p className="mt-6">© 2026 TradeSpurt. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
