import {FunctionComponent} from "react";
import {getAuditList} from "kun-shared/built/apis/series";
import {LoadMoreComp} from "../../../components/LoadMoreComp";
import {AuditItem} from "./AuditItem";

export  const ToAuditTask: FunctionComponent = () => {

    console.log('ok');

    return (
        <div>
            <LoadMoreComp initialParameter={{}} render={r => (<AuditItem item={r}/>)} api={getAuditList} keyGetter={r => r.id}/>

        </div>
    )
}