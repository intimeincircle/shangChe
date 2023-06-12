// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

export interface ContractOrderInfo {
  codeName: string;
  code: string;
  entrustId: string;
  entrust?: string;
  finalPrice?: string;
  volume: number;
  direction: string;
  state?: string;
}

export function isContractOrderInfo(v: any): v is ContractOrderInfo {
  return (
    (!v['state'] || ((typeof v['state']) === 'string')) &&
    ((typeof v['direction']) === 'string') &&
    ((typeof v['volume']) === 'number') &&
    (!v['finalPrice'] || ((typeof v['finalPrice']) === 'string')) &&
    (!v['entrust'] || ((typeof v['entrust']) === 'string')) &&
    ((typeof v['entrustId']) === 'string') &&
    ((typeof v['code']) === 'string') &&
    ((typeof v['codeName']) === 'string')
  );
}
