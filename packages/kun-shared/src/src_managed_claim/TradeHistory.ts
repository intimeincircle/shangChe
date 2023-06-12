// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

import { DateTime, isDateTime } from './DateTime';
import { OrderCommand, isOrderCommand } from './OrderCommand';

export interface TradeHistory {
  direction: OrderCommand;
  tradeMoney?: number;
  dateTime?: DateTime;
  info?: string;
}

export function isTradeHistory(v: any): v is TradeHistory {
  return (
    (!v['info'] || ((typeof v['info']) === 'string')) &&
    (!v['dateTime'] || (v['dateTime'] && isDateTime(v['dateTime']))) &&
    (!v['tradeMoney'] || ((typeof v['tradeMoney']) === 'number')) &&
    (v['direction'] && isOrderCommand(v['direction']))
  );
}