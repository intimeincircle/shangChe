import {useQuery} from "react-query";
import {getQiniuToken} from "../apis/web";

export const useQueryQiniuToken = () => useQuery('qiniu', () =>
    getQiniuToken({}).catch(r => null), {
       staleTime: 5 * 1000,
       cacheTime: 60 * 1000,
      useErrorBoundary: false,
 })