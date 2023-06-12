import {ReqByPageMark} from "../src_managed/ReqByPageMark";
import {NoSqlPagingListDataPageMark} from "../common/NoSqlPagingListDataPageMark";

export type PaginationApi<R, N> = (r: R, page: ReqByPageMark)  => Promise<NoSqlPagingListDataPageMark<N>>
