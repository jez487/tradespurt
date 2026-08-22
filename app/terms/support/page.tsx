export default function Support() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-4xl font-bold">TradeSpurt Support</h1>

        <div className="space-y-6 leading-7">
          <p>
            Need help with TradeSpurt? We're here to help with questions about
            your account, subscription or use of our service.
          </p>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Contact support
            </h2>
            <p>
              For customer support, email us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:support@tradespurt.com"
                className="underline"
              >
                support@tradespurt.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Subscription and billing
            </h2>
            <p>
              If you have a question about your TradeSpurt subscription,
              payment or cancellation, contact us using the email address
              above and include the email address associated with your
              subscription.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Technical support
            </h2>
            <p>
              If you experience a technical problem, please tell us what
              happened and, where possible, include details of the device and
              browser you were using.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Market information
            </h2>
            <p>
              TradeSpurt provides market-related information and alerts for
              informational and educational purposes. Customer support cannot
              provide personalised financial or investment advice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">
              Privacy and terms
            </h2>
            <p>
              You can find further information in our{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="underline">
                Terms of Service
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
