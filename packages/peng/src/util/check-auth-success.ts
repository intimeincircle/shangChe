import {RetItem} from "kun-shared/built/apis/item";
import {NoSqlPagingListDataPageMarkDateTime} from "kun-shared/built/common/NoSqlPagingListDataPageMarkDateTime";
import {NoSqlPagingListData} from "kun-shared/built/common/NoSqlPagingListData";
import {ModelRetRecord} from "kun-shared/built/apis/model";
// eslint-disable-next-line camelcase
import {isRET_AUTH_FAIL} from "kun-shared/built/src_managed/RET_AUTH_FAIL";
import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";

export function checkIfAuthSuccess<T>(data: RetItem<T> | NoSqlPagingListData<any> | ModelRetRecord<any> | NoSqlPagingListDataPageMarkDateTime<any>): boolean {

    if (isRET_AUTH_FAIL(data.code) || data.code === 4001) {
        return false
    }
    if (!checkIfSuccess(data)) {
        throw new Error(data.msg)
    } else {
        return true;
    }

}
