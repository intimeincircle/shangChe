import {useQuery} from "react-query";
import {getUserSession, requestV2GetUserDetailInfo, requestV2UserDetail} from "../apis/web";
import {ReactQueryKeys} from "../shared/context";

export const useUserSessionItem = () => useQuery([ReactQueryKeys.userSession],() =>
    getUserSession({}),{
    retry: 1,
    useErrorBoundary: false,
    refetchOnMount: false,
    onError: () => {
        console.log('onError use UserSesssion');
    }
})

export const useUserSession = () => useQuery([ReactQueryKeys.userSession],() =>
    getUserSession({}).catch(() => ({
        code: 200,
        msg: '',
        record: undefined,
        data: undefined,
    })), {
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: 1,
    useErrorBoundary: false,
    refetchOnMount: false,
    onError: () => {
        console.log('onError use UserSesssion');
    }
})
export const useUserDetail = () => useQuery([ReactQueryKeys.userDetail],() =>
    requestV2UserDetail({}),{
    useErrorBoundary: true,
    refetchOnMount: false
})


export const useSeeUserDetail = (userId?: string) => useQuery([ReactQueryKeys.useSeeDetail, userId],() =>
    requestV2GetUserDetailInfo({
        userId: userId ?? ''
    }), {
    enabled:  userId != null && userId.length > 0
})


