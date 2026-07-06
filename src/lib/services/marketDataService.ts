export interface LiveMarketData {
  price: number;
  changePercent: number;
  marketCap: number | null;
}

export const marketDataService = {
  async getLiveData(ticker: string): Promise<LiveMarketData | null> {
    const apiKey = process.env.FINNHUB_API_KEY;
    if (!apiKey) {
      console.error("Missing FINNHUB_API_KEY");
      return null;
    }

    try {
      const quoteRes = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${apiKey}`,
        { cache: "no-store" }
      );
      const quote = await quoteRes.json();

      const profileRes = await fetch(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${apiKey}`,
        { next: { revalidate: 3600 } }
      );
      const profile = await profileRes.json();

      const currentPrice = quote.c;
      const previousClose = quote.pc;

      if (!currentPrice || !previousClose) {
        return null;
      }

      const changePercent =
        ((currentPrice - previousClose) / previousClose) * 100;

      return {
        price: currentPrice,
        changePercent: Number(changePercent.toFixed(2)),
        marketCap: profile.marketCapitalization ?? null,
      };
    } catch (error) {
      console.error(`Failed to fetch market data for ${ticker}:`, error);
      return null;
    }
  },
};