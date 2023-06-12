import { useEffect } from 'react';
export { useEffect };
declare type Callback = () => void;
export declare function useDidMount(function_: () => Promise<void | Callback> | void | Callback): void;
