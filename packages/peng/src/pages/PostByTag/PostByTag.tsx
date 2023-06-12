import {FunctionComponent} from "react";
import {getCardByTag} from "kun-shared/built/apis/search";
import {useDidMount} from "kun-react-tools/built/hooks/use-dit-mount";
import {LoadMoreComp} from "../../components/LoadMoreComp";
import {useQueryParams} from "../../app/params";

const PostByTag: FunctionComponent = () => {

    const { tag } = useQueryParams() as {tag: string};
    useDidMount(() => {
        console.log('xxxxx', tag)
    })

    return (
        <LoadMoreComp initialParameter={{tag}} render={r => (
                <h1>{r.title}</h1>
            )} api={getCardByTag} keyGetter={r => r.cardId}/>
    )
}
export default PostByTag;