// Generated by ScalaTS 0.5.7: https://scala-ts.github.io/scala-ts/

import { ConstantMSG } from './ConstantMSG';

export interface NoSqlPagingListDataPageMark<T> {
  code: ConstantMSG;
  msg: string;
  total ?: number;
  records: ReadonlyArray<T>;
  pageState?: number;
  prevPageMark?: number;
}

