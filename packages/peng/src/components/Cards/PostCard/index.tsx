import {FunctionComponent, useMemo} from "react";
import {HorseCardReturn} from "kun-shared/built/src_managed/HorseCardReturn";
import {Link} from "@chakra-ui/react";
import {getArticleUrl} from "../../../navigators";

interface Props {
    item: HorseCardReturn
}

export const PostCard : FunctionComponent<Props> = ({item}) => {

    const url = useMemo(() => getArticleUrl(item.seriesId, item.cardId),[item.seriesId, item.cardId]);
    return (
        <Link href={url} isExternal>
            <div>
            {item.title}
        </div>
        </Link>
    );
}

