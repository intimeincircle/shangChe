import {FunctionComponent, useState} from "react";
import { Button } from "@mantine/core";
import {useDidMount} from "kun-react-tools/built/hooks/use-dit-mount";
import {checkIfCollected, createHorseCardCollection} from "kun-shared/built/apis/collection";
// eslint-disable-next-line camelcase
import {Horse_Card_TypeInhabitant} from "kun-shared/built/src_managed/Horse_Card_Type";
import {BackendId} from "../../navigators";


interface Props {
    series: BackendId
    card: BackendId
    title: string,
}

export const CollectionStatus: FunctionComponent<Props> = (props) => {
    const [collected, setCollected] = useState(false)
    useDidMount(async () => {
        const r = await checkIfCollected({
            id: props.card as string,
            msgType: Horse_Card_TypeInhabitant,
        })
        setCollected(r.record ?? false)
    })
    return (
        <Button>
            收藏
        </Button>
        // <LoadingButton onSubmit={async () => createHorseCardCollection({
        //     cardId: props.card as string,
        //     seriesId: props.series as string,
        //     title: props.title
        // })
        // }>{collected ? '已收藏': '未收藏'}</LoadingButton>
    )
}
