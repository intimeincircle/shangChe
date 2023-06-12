import {MutationFunction} from "react-query/types/core/types";
import {UseMutationOptions} from "react-query/types/react/types";
import {useMutation} from "react-query";
import {
    DefaultApi,
    createConfiguration,
    ServerConfiguration,
} from "kun-apis";
import {httpLibrary} from "@/platform/http-lib";



export const serverConfiguration = new ServerConfiguration(process.env.BACKEND_API, {  })
export const defaultApi = new DefaultApi(createConfiguration({
    httpApi: httpLibrary,
    baseServer: serverConfiguration,
    middleware: [
    ],
}))


export const useMutationDefaultApi = <TData,TVariables >( mutationFn: MutationFunction<TData, TVariables>, options?: Omit<UseMutationOptions<TData, unknown, TVariables, unknown>, 'mutationFn'>) => useMutation(mutationFn.bind(defaultApi), options)

export const useDefaultApi = <TData,TVariables>(mutationFn: MutationFunction<TData, TVariables>) => mutationFn.bind(defaultApi)
