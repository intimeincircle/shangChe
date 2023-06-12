
export type ToastStatus = 'info' | 'warning' | 'success' | 'error';

interface ExecuteOptions<R> {
    asyncMethod: () => Promise<R>;
    setLoading?: (loading: boolean) => void;
    toast?: (message: string, error: ToastStatus) => void;
}

const defaultMessage = '请求出错，请稍后再试或者提交反馈';

export function getErrorMessage(error: unknown): string {
    let message;
    if (error == null) {
        message = defaultMessage;
    } else if (error instanceof Error) {
        message = error.message;
    } else if (typeof error === 'object') {
        message = (error as { error?: { message?: string } }).error?.message;
    } else if (typeof error === 'string') {
        message = error;
    }

    return message != null && message.length > 0 ? message : defaultMessage;
}

export async function _execWithLoading<R>(
    options: ExecuteOptions<R>,
): Promise<R> {
    options.setLoading?.(true);

    let returnData;
    try {
        returnData = await options.asyncMethod();
    } catch (error) {
        console.log('error', error)
        options.toast?.(getErrorMessage(error), 'error');
        throw error;
    } finally {
        options.setLoading?.(false);
    }

    return returnData;
}
