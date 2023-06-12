// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

export interface StockHotPrice {
  date: Date;
  price: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  mount: number;
}

export function isStockHotPrice(v: any): v is StockHotPrice {
  return (
    ((typeof v['mount']) === 'number') &&
    ((typeof v['volume']) === 'number') &&
    ((typeof v['low']) === 'number') &&
    ((typeof v['high']) === 'number') &&
    ((typeof v['close']) === 'number') &&
    ((typeof v['open']) === 'number') &&
    ((typeof v['price']) === 'number') &&
    (v['date'] && (v['date'] instanceof Date))
  );
}