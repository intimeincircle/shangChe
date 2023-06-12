import { LoadingOverlay, LoadingOverlayProps } from "@mantine/core";
import {FunctionComponent, memo} from "react";

interface Props extends Omit<LoadingOverlayProps, 'children'> {
    children: React.ReactNode
}

export const KunLoadingOverlay: FunctionComponent<Props> = memo(( props) => (
        <div style={{ width: "100%", position: 'relative' }}>
            <LoadingOverlay
                loaderProps={{ size: 'sm', variant: 'bars' }}
                visible={props.visible}
                overlayOpacity={0.3}
            />
            {props.children}
        </div>
    ))
