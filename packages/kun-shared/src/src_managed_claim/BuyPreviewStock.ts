// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

import { StockSymbol, isStockSymbol } from './StockSymbol';

export interface BuyPreviewStock {
  stock: StockSymbol;
  name: string;
}

export function isBuyPreviewStock(v: any): v is BuyPreviewStock {
  return (
    ((typeof v['name']) === 'string') &&
    (v['stock'] && isStockSymbol(v['stock']))
  );
}
