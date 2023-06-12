import {FunctionComponent} from "react";
import {getSeriesByAuthorGetByPageMark} from "kun-shared/built/apis/series";
import {SeriesCard} from "../Cards/SeriesCards";
import {LoadMoreComp} from "../LoadMoreComp";

interface Props {
   id: string
}

export const SeriesByAuthor: FunctionComponent<Props> = ({id}) => (
        <div>
            <LoadMoreComp initialParameter={{id}} render={item => (
                <SeriesCard item={item} />
            )} api={getSeriesByAuthorGetByPageMark} keyGetter={r => r.id} />
        </div>
    )