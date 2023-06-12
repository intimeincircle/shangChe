// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

import { ConfirmationContractObject, isConfirmationContractObject } from './ConfirmationContractObject';
import { ConfirmationContractState, isConfirmationContractState } from './ConfirmationContractState';
import { ConfirmationOk, isConfirmationOk } from './ConfirmationOk';

export type ContractAccountReply = ConfirmationContractObject | ConfirmationContractState | ConfirmationOk;

export function isContractAccountReply(v: any): v is ContractAccountReply {
  return (
    isConfirmationContractObject(v) ||
    isConfirmationContractState(v) ||
    isConfirmationOk(v)
  );
}