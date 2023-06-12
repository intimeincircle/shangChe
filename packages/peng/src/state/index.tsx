import {useQuery} from "react-query";
import {KunUser} from "kun-shared/built/fetch";
import constate from "constate";
import {useMemo} from "react";
import {User, UserStatus} from "@chatscope/use-chat";
import {Presence} from "@chatscope/use-chat/dist/Presence";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {getUserSession} from "../apis/web";

export const  useCurrentUserState = (): {user: KunUser|undefined, chatUser: User, userId?: string} => {
    const {data} = useQuery('auth1', async () => getUserSession({}))

    const state =  useMemo(() => data?.record, [
        data?.record
    ])
    console.log('data data data', state);

    const joe = useMemo(() => new User({
        id: state?.userId ?? '',
        presence: new Presence({status: UserStatus.Available, description: "ddd"}),
        firstName: "",
        lastName: "",
        username: state?.nickName ??  state?.userName ?? 'userName' ,
        // joeModel.username,
        email: "",
        avatar: state?.thumbnail ? getKunImageUrl(state?.thumbnail ?? '') : '',
        bio: ""
    }), [state?.nickName, state?.thumbnail, state?.userId, state?.userName]);

    return useMemo(() => ({userId:  state?.userId, user: state, chatUser: joe}), [joe, state]);
}


export const [
    CurrentUserProvider,
    useCurrentUser
  ] =
     constate(
         useCurrentUserState,
  )