// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

export interface StockChaoDie {
  date: Date;
  chaodie: number;
}

export function isStockChaoDie(v: any): v is StockChaoDie {
  return (
    ((typeof v['chaodie']) === 'number') &&
    (v['date'] && (v['date'] instanceof Date))
  );
}
