import {useScroll} from "ahooks";

export function useShowTop(target: HTMLElement|React.RefObject<any>, height: number): boolean[] {
    const position = useScroll(target, ({top}) => top > Math.min(height, 100));
    return [position.top > height]
}