import React, {FunctionComponent, useState} from "react";
import { Button } from "@mantine/core";
import {ConstantChargeType, ReqQuerySeriesHorse} from "kun-shared/built/fetch";
import {getAuthLocalKey} from "kun-tools/built/common/req";
import {useImmer} from "use-immer";
import {Helmet} from "react-helmet";
import {useQuery} from "react-query";
import {useAsync} from "react-use";
import {getSeriesCategories} from "kun-shared/built/apis/series";
import {Flex} from "@chakra-ui/react";
import {Categories} from "../../components/Categories";
import {CONST_EMPTY_ARRAY} from "../../util/default-empty";
import {Header} from "../../components/Header";
import {KunFooter} from "../../components/Footer";
import {ConstKunConfig} from "../../app/kun-config";
import {defaultApi} from "../../react-query/api";
import {getNavigateSeriesHome} from "../../navigators";
import { KLink } from "../../components/KLink";

const DiscoverSeries: FunctionComponent = () => {
    const a = useAsync(() => getSeriesCategories({}, {}), [])

    const [queryState, setQueryState] = useImmer<ReqQuerySeriesHorse>({})
    const [values, setValues] = useState({})

    const b1 = useQuery(['hello',queryState], () => defaultApi.postApiV1TapirHorseSeriesQuery({
        authorization: getAuthLocalKey(),
        reqQuerySeriesHorse: queryState ?? {},
    }))

    console.log('b1', b1)

    if (a.loading) {
        return null
    }

    return (
        <Flex direction="column">
                <Helmet title={ConstKunConfig.horseProductTitle} />
                <Header/>

            <Button onClick={() => {
                setQueryState({})
            }}>
                全部
            </Button>

            <Button onClick={() => {
                setQueryState(r => {
                    r.chargeType = ConstantChargeType.Free
                })
            }}>
                FREE
            </Button>

            <Button onClick={() => {
                setQueryState(r => {
                    r.chargeType = ConstantChargeType.Charge
                })
            }}>
               NOT FREE
            </Button>

                <Categories list={a.value?.records ?? CONST_EMPTY_ARRAY} onChange={(v) => {
                    setQueryState(r1 => {
                        r1.subCategoryId=v.id
                    })
                }} />

            {
                (b1.data?.records ?? []).map(item => (
                    <KLink href={getNavigateSeriesHome(item.id)}>{item.title}</KLink>
                ))
            }
                {/* <LoadMoreComp initialParameter={values} render={item => ( */}
                {/*    <Link to={getNavigateSeriesHome(item.id)} href={getNavigateSeriesHome(item.id)}> */}
                {/*        <h3> */}
                {/*            {item.title} */}
                {/*        </h3> */}
                {/*    </Link> */}
                {/* )} api={getPublicSeries} keyGetter={r => r.id}/> */}
                
                {/* <LoadMoreComp initialParameter={values} render={item => ( */}
                {/*    <Link to={getNavigateTribe(item.id)} href={getNavigateTribe(item.id)}> */}
                {/*        <h3> */}
                {/*            {item.title} */}
                {/*        </h3> */}
                {/*    </Link> */}
                {/* )} api={getPublicSeries} keyGetter={r => r.id}/> */}

                <KunFooter/>
            </Flex>
    );
}

export default React.memo(DiscoverSeries)
