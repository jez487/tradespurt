import { NextResponse } from "next/server";

export const revalidate = 300;

const TWELVE_DATA_URL = "https://api.twelvedata.com/quote";
const COINGECKO_URL = "https://api.coingecko.com/api/v3/simple/price";

export async function GET() {
  const apiKey = process.env.twelve_data_api_key;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing Twelve Data API key" },
      { status: 500 }
    );
  }

  try {
   const twelveSymbols = [
  "AAPL",
  "MSFT",
  "NVDA",
];

    const twelveUrl =
      `${TWELVE_DATA_URL}?symbol=${encodeURIComponent(
        twelveSymbols.join(",")
      )}&apikey=${apiKey}`;

    const cryptoUrl =
      `${COINGECKO_URL}?ids=bitcoin,ethereum,ripple,crypto-com-chain` +
      `&vs_currencies=gbp&include_24hr_change=true`;

    const [marketsResponse, cryptoResponse] = await Promise.all([
      fetch(twelveUrl, {
        next: { revalidate: 300 },
      }),
      fetch(cryptoUrl, {
        next: { revalidate: 300 },
      }),
    ]);

    if (!marketsResponse.ok) {
      throw new Error("Twelve Data request failed");
    }

    if (!cryptoResponse.ok) {
      throw new Error("Crypto request failed");
    }

    const marketsData = await marketsResponse.json();
    const cryptoData = await cryptoResponse.json();

    return NextResponse.json({
      markets: marketsData,
      crypto: {
        BTC: cryptoData.bitcoin,
        ETH: cryptoData.ethereum,
        XRP: cryptoData.ripple,
        CRO: cryptoData["crypto-com-chain"],
      },
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Market data error:", error);

    return NextResponse.json(
      { error: "Unable to load market data" },
      { status: 500 }
    );
  }
}
