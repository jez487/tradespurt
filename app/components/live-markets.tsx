"use client";

import { useEffect, useState } from "react";

type StockData = {
  symbol?: string;
  name?: string;
  close?: string;
  percent_change?: string;
};

type CryptoData = {
  gbp?: number;
  gbp_24h_change?: number;
};

type MarketResponse = {
  markets?: Record<string, StockData>;
  crypto?: Record<string, CryptoData>;
  updatedAt?: string;
};

function Change({ value }: { value?: number }) {
  if (value === undefined || Number.isNaN(value)) {
    return null;
  }

  const sign = value >= 0 ? "+" : "";

  return (
    <span className={value >= 0 ? "market-up" : "market-down"}>
      {sign}
      {value.toFixed(2)}%
    </span>
  );
}

export default function LiveMarkets() {
  const [data, setData] = useState<MarketResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMarkets() {
      try {
        const response = await fetch("/api/markets");

        if (!response.ok) {
          throw new Error("Unable to load markets");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMarkets();

    const timer = setInterval(loadMarkets, 300000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <section id="markets">
        <h2>Live Markets</h2>
        <p>Loading latest market data...</p>
      </section>
    );
  }

  const aapl = data?.markets?.AAPL;
  const msft = data?.markets?.MSFT;
  const nvda = data?.markets?.NVDA;

  const btc = data?.crypto?.BTC;
  const eth = data?.crypto?.ETH;
  const xrp = data?.crypto?.XRP;
  const cro = data?.crypto?.CRO;

  return (
    <section id="markets">
      <h2>Live Markets</h2>

      <p>
        Latest market prices and daily movements. Market data may be delayed.
      </p>

      <h3>Global Stocks</h3>

      <div className="market-grid">
        <div className="card">
          <h3>Apple (AAPL)</h3>
          <p className="market-price">
            ${aapl?.close ? Number(aapl.close).toFixed(2) : "Unavailable"}
          </p>
          <Change
            value={
              aapl?.percent_change
                ? Number(aapl.percent_change)
                : undefined
            }
          />
        </div>

        <div className="card">
          <h3>Microsoft (MSFT)</h3>
          <p className="market-price">
            ${msft?.close ? Number(msft.close).toFixed(2) : "Unavailable"}
          </p>
          <Change
            value={
              msft?.percent_change
                ? Number(msft.percent_change)
                : undefined
            }
          />
        </div>

        <div className="card">
          <h3>NVIDIA (NVDA)</h3>
          <p className="market-price">
            ${nvda?.close ? Number(nvda.close).toFixed(2) : "Unavailable"}
          </p>
          <Change
            value={
              nvda?.percent_change
                ? Number(nvda.percent_change)
                : undefined
            }
          />
        </div>
      </div>

      <h3>Crypto</h3>

      <div className="market-grid">
        <div className="card">
          <h3>Bitcoin (BTC)</h3>
          <p className="market-price">
            £
            {btc?.gbp !== undefined
              ? btc.gbp.toLocaleString("en-GB")
              : "Unavailable"}
          </p>
          <Change value={btc?.gbp_24h_change} />
        </div>

        <div className="card">
          <h3>Ethereum (ETH)</h3>
          <p className="market-price">
            £
            {eth?.gbp !== undefined
              ? eth.gbp.toLocaleString("en-GB")
              : "Unavailable"}
          </p>
          <Change value={eth?.gbp_24h_change} />
        </div>

        <div className="card">
          <h3>XRP</h3>
          <p className="market-price">
            £{xrp?.gbp !== undefined ? xrp.gbp.toFixed(4) : "Unavailable"}
          </p>
          <Change value={xrp?.gbp_24h_change} />
        </div>

        <div className="card">
          <h3>Cronos (CRO)</h3>
          <p className="market-price">
            £{cro?.gbp !== undefined ? cro.gbp.toFixed(4) : "Unavailable"}
          </p>
          <Change value={cro?.gbp_24h_change} />
        </div>
      </div>
    </section>
  );
}
