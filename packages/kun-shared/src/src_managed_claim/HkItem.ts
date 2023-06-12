// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

export interface HkItem {
  symbol: string;
  name: string;
  engname: string;
  tradetype: string;
  lasttrade: string;
  prevclose: string;
  open: string;
  high: string;
  low: string;
  volume: string;
  amount: string;
  ticktime: string;
  buy: string;
  sell: string;
  pricechange: string;
  changepercent: string;
}

export function isHkItem(v: any): v is HkItem {
  return (
    ((typeof v['changepercent']) === 'string') &&
    ((typeof v['pricechange']) === 'string') &&
    ((typeof v['sell']) === 'string') &&
    ((typeof v['buy']) === 'string') &&
    ((typeof v['ticktime']) === 'string') &&
    ((typeof v['amount']) === 'string') &&
    ((typeof v['volume']) === 'string') &&
    ((typeof v['low']) === 'string') &&
    ((typeof v['high']) === 'string') &&
    ((typeof v['open']) === 'string') &&
    ((typeof v['prevclose']) === 'string') &&
    ((typeof v['lasttrade']) === 'string') &&
    ((typeof v['tradetype']) === 'string') &&
    ((typeof v['engname']) === 'string') &&
    ((typeof v['name']) === 'string') &&
    ((typeof v['symbol']) === 'string')
  );
}