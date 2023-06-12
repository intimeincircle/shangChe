import {FunctionComponent} from "react"
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import { Scaffold } from "../../components/Scaffold";
import {requestGetPaymentBalance} from "../../apis/web";
import {ReactQueryKeys} from "../../shared/context";
import {defaultApi} from "../../react-query/api";

const  Wallet: FunctionComponent = () => {
    const {data} = useQuery([ReactQueryKeys.getHeaderPin], () => requestGetPaymentBalance({}))

    const {data: wallet} = useQuery([ReactQueryKeys.requestGetPaymentHistory], () => defaultApi.postApiV1Order50PaymentList.bind(defaultApi));

    const {t} = useTranslation()

    return (
        <Scaffold title={`${t('Wallet')}`}>
            {
                JSON.stringify(data)
            }

            {
                JSON.stringify(wallet)
            }
        </Scaffold>
    )
}

export default Wallet
