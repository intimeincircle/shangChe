import {FunctionComponent, useMemo} from "react";
import {HorseSeries} from "kun-shared/built/src_managed/HorseSeries";
import {Link} from "@chakra-ui/react";
import {getSeriesDetailUrl} from "../../../navigators";

interface Props {
    item: HorseSeries
}

export const SeriesCard : FunctionComponent<Props> = ({item}) => {
    const seriesDetailUrl = useMemo(() => getSeriesDetailUrl(item.id),[item.id]);

    return (
        <div>
            <Link href={seriesDetailUrl} isExternal>
                {item.title}
                {item.description}
            </Link>
        </div>
    );
}

