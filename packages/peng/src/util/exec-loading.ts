import {_execWithLoading, ToastStatus} from "kun-react-tools/built/hooks/set-loading";
import {RetItem} from "kun-shared/built/apis/item";
import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";
import toast from "react-hot-toast";

export async function execSetLoading(setLoading: (loading: boolean) => void, fun: () => Promise<void>): Promise<void> {
    await _execWithLoading({
        asyncMethod: async () => {
                 await fun()
        },
        setLoading,
    })
}

export async function execLoading<R>(fun: () => Promise<RetItem<R>>, setLoading: (loading: boolean) => void): Promise<void> {
    await _execWithLoading({
        asyncMethod: async () => {
                const r1 = await fun()
                if(!checkIfSuccess(r1)) {
                    throw new Error((r1).msg)
                }
        },
        setLoading,
        toast: (msg: string, error: ToastStatus) => {
            toast.error(msg);
        },
    })
}