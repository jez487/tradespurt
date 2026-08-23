export default function Home() {
  return (
    <>
      <header>
        <div>
          <strong>TradeSpurt</strong>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="/support">Support</a>
        </nav>
      </header>

      <main>
        <section>
          <h1>Spot the Move.<br />Trade the Moment.</h1>

          <p>
            AI-powered trading alerts and market insights designed to help you
            identify opportunities faster and make more informed trading
            decisions.
          </p>

          <a className="button" href="#pricing">
            View Plans
          </a>
        </section>

      
        <section id="markets">
  <h2>Live Markets</h2>

  <p>Track key global markets and cryptocurrencies in real time.</p>

  <div className="market-grid">
    <div className="card">
      <h3>S&P 500</h3>
      <p>Live price coming soon</p>
    </div>

    <div className="card">
      <h3>Nasdaq</h3>
      <p>Live price coming soon</p>
    </div>

    <div className="card">
      <h3>Dow Jones</h3>
      <p>Live price coming soon</p>
    </div>

    <div className="card">
      <h3>Bitcoin (BTC)</h3>
      <p>Live price coming soon</p>
    </div>

    <div className="card">
      <h3>Ethereum (ETH)</h3>
      <p>Live price coming soon</p>
    </div>

    <div className="card">
      <h3>XRP</h3>
      <p>Live price coming soon</p>
    </div>

    <div className="card">
      <h3>Cronos (CRO)</h3>
      <p>Live price coming soon</p>
    </div>
  </div>
</section>

        <section id="about">
          <h2>Trade Smarter</h2>

          <p>
            TradeSpurt uses AI-powered analysis to monitor market activity and
            highlight potential trading opportunities. Get clear, timely
            insights without spending hours analysing the markets yourself.
          </p>
        </section>

        <section id="pricing">
          <h2>Simple Pricing</h2>

          <div className="card">
            <h3>TradeSpurt Pro</h3>

            <h2>
              £19.99 <small>/ month</small>
            </h2>

            <p>
              AI-powered trading alerts, market insights and access to the
              TradeSpurt subscriber service.
            </p>

            <a className="button" href="#">
              Get Started
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Trading involves risk. TradeSpurt provides market information and
          alerts for informational purposes only and does not provide financial
          advice.
        </p>

        <nav>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/support">Support</a>
        </nav>

        <p>© 2026 TradeSpurt. All rights reserved.</p>
      </footer>
    </>
  );
}
