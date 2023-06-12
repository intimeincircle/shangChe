import {FunctionComponent} from "react";
import {requestGetCardsByAuthorByMark} from "kun-shared/built/apis/get-cards-by-user";
import {PostCard} from "../Cards/PostCard";
import {LoadMoreComp} from "../LoadMoreComp";


interface Props {
    id: string
}

export const PostByAuthor: FunctionComponent<Props> = ({id}) => (
        <LoadMoreComp 
            initialParameter={{id}}
            keyGetter={item => item.cardId}
            render={item => (
                <PostCard item={item} />
            )}
            api={requestGetCardsByAuthorByMark}
        />
    )
