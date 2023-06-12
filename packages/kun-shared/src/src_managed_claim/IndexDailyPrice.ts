// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

export interface IndexDailyPrice {
  date: Date;
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
}

export function isIndexDailyPrice(v: any): v is IndexDailyPrice {
  return (
    ((typeof v['volume']) === 'number') &&
    ((typeof v['low']) === 'number') &&
    ((typeof v['high']) === 'number') &&
    ((typeof v['open']) === 'number') &&
    ((typeof v['close']) === 'number') &&
    (v['date'] && (v['date'] instanceof Date))
  );
}
