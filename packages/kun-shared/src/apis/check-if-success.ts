import {RetItem, RetItemString} from "./item";
import {NoSqlPagingListData} from "../common/NoSqlPagingListData";
import {ModelRetRecord} from "./model";
import {NoSqlPagingListDataPageMarkDateTime} from "../common/NoSqlPagingListDataPageMarkDateTime";


export function checkIfSuccess<T>(data: RetItem<T> | RetItemString<T> | NoSqlPagingListData<any>| ModelRetRecord<any>|NoSqlPagingListDataPageMarkDateTime<any>): boolean {
  return Number(data.code) === 2001;
}


export function getFormError<T>(data:RetItem<T> | NoSqlPagingListData<any>| ModelRetRecord<any>|NoSqlPagingListDataPageMarkDateTime<any>):  ([string, string][])|null {
  if(data.code === 6001){
    const a = data as  ModelRetRecord<[string, string][]>
    return a.record
  }else {
    return null
  }
}
