import { DependencyList, useEffect } from 'react';

export function useEffectAsync(
    function_: () => Promise<void>,
    deps?: DependencyList,
): void {
    useEffect(() => {
        function_().catch(console.error);
    }, deps);
}
