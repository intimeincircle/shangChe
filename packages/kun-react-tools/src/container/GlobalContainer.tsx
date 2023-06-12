
import { FunctionComponent, useState, useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import {useDidMount} from "../hooks/use-dit-mount";

interface Props {
    className?: string;
}

export const GlobalContainer: FunctionComponent<Props> = (props) => {
    const container = useRef<HTMLDivElement>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (container.current != null) {
            container.current.className = props.className ?? '';
        }
    }, [props.className]);

    useDidMount(() => {
        container.current = document.createElement('div');
        container.current.className = props.className ?? '';
        document.body.appendChild(container.current);
        setMounted(true);

        return () => {
            if (container.current != null) {
                document.body.removeChild(container.current);
            }
        };
    });

    if (!mounted) {
        return null;
    }

    return ReactDOM.createPortal(props.children, container.current!);
};

