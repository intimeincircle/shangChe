import React, {useState, ReactElement} from 'react';
import {useDeepCompareEffect} from "react-use";
import {Button} from "@chakra-ui/react";
import {PaginationApi} from "kun-shared/built/apis/pagination";
import { toast } from 'react-hot-toast';
import {MyContentLoader} from "../Loader";
import {execSetLoading} from "../../util/exec-loading";
import {ConstKunConfig} from "../../app/kun-config";
import {NoMoreContent} from "../NoMoreContent";
import {OrEmptyComponennt} from "../OrEmpty";
import {checkIfAuthSuccess} from "../../util/check-auth-success";

/**
 * load more
 * @constructor
 */
interface Props<T, R> {
    emptyElement ?: React.ReactNode;
    totalVisible ?: boolean
    initialParameter: T,
    render: (r: R) => React.ReactNode,
    api: PaginationApi<T, R>,
    keyGetter: (a: R) => string|number,
    pageSize ?: number
}

export function LoadMoreComp<T, R>(props: Props<T, R>): ReactElement {

    const [loading, setLoading] = useState(false);
    const [pageMark, setPageMark] = useState<string|number>();
    const [dataList, setDataList] = useState<readonly R[]>([])
    const [total, setTotal] = useState<number>()
    const [didMounted, setDidMounted] = useState(false)


    const  fetchDataList = async (initial = false) => {
       await execSetLoading(setLoading, async () => {
                const resData = await props.api(props.initialParameter, {
                    pageMark: pageMark as any,
                    pageSize: props.pageSize ?? ConstKunConfig.DefaulPageSize
                })
                if(checkIfAuthSuccess(resData)) {
                    if(initial) {
                        setDataList(resData.records)
                    }else {
                        setDataList(dataList.concat(resData.records))
                    }
                    setPageMark(resData.pageState)
                    setTotal(resData.total)
                    if(!didMounted){
                        setDidMounted(true)
                    }
                } else {
                    toast.error('请先登录')
                }
            }
        )
    }

    // useDidMount(async () => {
    //     await fetchDataList(true);
    // })

    useDeepCompareEffect(() => {
        fetchDataList(true).then(() => {
            console.log('r')
        })
    },[props.initialParameter])

    return (
        <div>
            <OrEmptyComponennt size={dataList.length} mounted={didMounted}>
                {dataList.map(item => (
                    <div key={props.keyGetter(item)}>
                        {
                            props.render(item)
                        }
                    </div>
                ))}
            </OrEmptyComponennt>
            {
                loading && <MyContentLoader/>
            }
            {
                !loading  && didMounted && pageMark == null &&  dataList.length>0 && (
                    <NoMoreContent/>
                )
            }
            {
                !loading  && pageMark  && (
                    <Button onClick={() => fetchDataList()}>加载更多</Button>
                )
            }
            {
                props.totalVisible === true && (
                    total
                )
            }
        </div>
    )
}
