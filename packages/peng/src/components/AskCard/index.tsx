import { FunctionComponent, memo } from "react"
import {HorseCardWithSeries} from "kun-shared/built/src_managed/HorseCardWithSeries";


export const AskCard: FunctionComponent<{
    card: HorseCardWithSeries
}> = memo(({card}) => (
        <>
            {
                card.card.postType
            }
            {
                card.card.title
            }
        </>
    ))