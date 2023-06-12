import {FunctionComponent} from "react";
import {Button, useToast} from "@chakra-ui/react";
import {requestMarkPass} from "kun-shared/built/apis/mark-series-pass";
import {AuditSeriesVersionReturn} from "kun-shared/built/src_managed/AuditSeriesVersionReturn";
import toast from "react-hot-toast";

export  const AuditItem: FunctionComponent<{item: AuditSeriesVersionReturn }> = ({item}) => {

    console.log('ok');
    const onSubmit = async() => {
        await requestMarkPass({
            seriesId: item.seriesId,
            auditId: item.id,
        });
        toast.success('ok')
    }

    return (
        <div>
            <Button onClick={onSubmit}>通过</Button>
            {item.seriesVersion}
            {item.seriesName}
        </div>
    )
}
