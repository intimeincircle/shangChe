import {FunctionComponent} from "react";
import {HorseCardReturn} from "kun-shared/built/src_managed/HorseCardReturn";


interface Props {
    cards: ReadonlyArray<HorseCardReturn>
}

export const SeriesCardSummary: FunctionComponent<Props> = (props)=> (
        <div>{
            props.cards.map(c => (
                <div>{c.title}</div>
            ))
        }</div>
    )
