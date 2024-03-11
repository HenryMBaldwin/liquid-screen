export type DataPair = {
    time: number;
    liquidity: number;
}

export type PairData = {
    chainId: string;
    dexId: string;
    url: string;
    pairAddress: string;
    baseToken: {
      address: string;
      name: string;
      symbol: string;
    };
    quoteToken: {
      address: string;
      name: string;
      symbol: string;
    };
    priceNative: string;
    priceUsd: string;
    txns: {
      [key: string]: {
        buys: number;
        sells: number;
      };
    };
    volume: {
      [key: string]: number;
    };
    priceChange: {
      [key: string]: number;
    };
    liquidity: {
      usd: number;
      base: number;
      quote: number;
    };
    fdv: number;
    pairCreatedAt: number;
  };
  
export type DataPoint = {
    schemaVersion: string;
    pairs: PairData[];
  };
  