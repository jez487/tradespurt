export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

        <div className="space-y-6 leading-7">
          <p>
            <strong>Last updated:</strong> 22 August 2026
          </p>

          <p>
            These Terms of Service govern your use of the TradeSpurt website
            and services. By accessing or subscribing to TradeSpurt, you agree
            to these terms.
          </p>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Our service</h2>
            <p>
              TradeSpurt provides market-related information, alerts and
              educational content. Our services are provided for informational
              and educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              No financial advice
            </h2>
            <p>
              TradeSpurt does not provide financial, investment, tax or legal
              advice. Nothing provided through TradeSpurt should be considered
              a recommendation or instruction to buy, sell or hold any
              financial instrument.
            </p>
            <p className="mt-3">
              Trading and investing involve risk. You are responsible for your
              own financial decisions and should seek independent professional
              advice where appropriate.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Subscriptions and payments
            </h2>
            <p>
              Some TradeSpurt services may require a paid subscription.
              Subscription prices and billing frequency will be displayed
              before purchase. Payments are processed securely by Stripe.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Cancellation
            </h2>
            <p>
              You may cancel your subscription in accordance with the
              cancellation options provided through the service. Cancellation
              prevents future renewal charges but does not normally provide a
              refund for a subscription period that has already begun, except
              where required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Acceptable use
            </h2>
            <p>
              You must not misuse TradeSpurt, attempt to interfere with its
              operation, gain unauthorised access to its systems, or reproduce,
              redistribute or commercially exploit our content without
              permission.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Availability and accuracy
            </h2>
            <p>
              We aim to provide useful and timely information, but we cannot
              guarantee that the service will always be uninterrupted,
              error-free, complete or accurate. Market information can change
              rapidly and may be delayed or unavailable.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Limitation of liability
            </h2>
            <p>
              To the extent permitted by law, TradeSpurt is not responsible
              for trading or investment losses resulting from decisions made
              using information provided through the service. Nothing in these
              terms excludes liability that cannot legally be excluded.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Changes to these terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. The
              latest version will be published on this page with the updated
              date.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
            <p>
              If you have questions about these terms, contact us at
              support@tradespurt.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
