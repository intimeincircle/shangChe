// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

import { bk, isbk } from './bk';
import { block, isblock } from './block';
import { convertible, isconvertible } from './convertible';
import { empty, isempty } from './empty';
import { index, isindex } from './index';
import { jijin, isjijin } from './jijin';
import { option, isoption } from './option';
import { stock, isstock } from './stock';
import { uk, isuk } from './uk';
import { usa, isusa } from './usa';

export type SymbolEnum = bk | block | convertible | empty | index | jijin | option | stock | uk | usa;

export function isSymbolEnum(v: any): v is SymbolEnum {
  return (
    isbk(v) ||
    isblock(v) ||
    isconvertible(v) ||
    isempty(v) ||
    isindex(v) ||
    isjijin(v) ||
    isoption(v) ||
    isstock(v) ||
    isuk(v) ||
    isusa(v)
  );
}
