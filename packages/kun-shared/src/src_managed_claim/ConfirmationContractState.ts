// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

import { ContractDetailStockList, isContractDetailStockList } from './ContractDetailStockList';

export interface ConfirmationContractState {
  list: ReadonlyArray<ContractDetailStockList>;
}

export function isConfirmationContractState(v: any): v is ConfirmationContractState {
  return (
    (Array.isArray(v['list']) && v['list'].every(elmt => elmt && isContractDetailStockList(elmt)))
  );
}
