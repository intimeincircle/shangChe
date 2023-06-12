import { useEffect } from 'react';

export {useEffect}
type Callback = () => void;

export function useDidMount(
  function_: () => Promise<void | Callback> | void | Callback,
): void {
  useEffect(() => {
    let callback: Callback | void;
    const returnData = function_();
    if (typeof returnData === 'function') {
      callback = returnData;
    } else if (typeof returnData !== 'undefined') {
      returnData
        .then((c) => {
          callback = c;
          return undefined;
        })
        .catch((error) => {
          console.error(error);
        });
    }
    return () => {
      if (typeof callback === 'function') {
        callback();
      }
    };
  }, []);
}

