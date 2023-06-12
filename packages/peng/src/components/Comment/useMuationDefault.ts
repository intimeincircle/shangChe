import {MutationFunction} from "react-query/types/core/types";
import {UseMutationOptions} from "react-query/types/react/types";
import {useMutation} from "react-query";
import {defaultApi} from "../../react-query/api";

export const useMutationDefaultApi = <TData,TVariables >( mutationFn: MutationFunction<TData, TVariables>, options?: Omit<UseMutationOptions<TData, unknown, TVariables, unknown>, 'mutationFn'>) => useMutation(mutationFn.bind(defaultApi), options)

export const useDefaultApi = <TData,TVariables>(mutationFn: MutationFunction<TData, TVariables>) => mutationFn.bind(defaultApi)