import React, {FunctionComponent, memo} from "react";
import {DirectChat} from "../Chat/DirectChat";
import {useQueryParams} from "../../app/params";
import {useCurrentUserState} from "../../state";


const Page: FunctionComponent = () => {

    const {id} = useQueryParams() as {id: string};

    const { userId } = useCurrentUserState();

    return (
        <div>
            {
                userId ? (
                    <DirectChat groupId={id} userId={userId}/>
                ): ''
            }
        </div>
    )
}

export default memo(Page)