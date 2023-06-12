import React, {RefObject, FunctionComponent, memo, useEffect, useRef, useState} from "react";
import {useUploadButton} from "./useUploadButton";

const UploadButton: FunctionComponent<{
    onOk: (data: string) => void,
}> = memo(({onOk}) => {
    const m = useRef<Element>(null)
    useUploadButton(m, onOk)
    return (
        <>
            <div className="Uppy" ref={m as unknown as RefObject<HTMLDivElement>}>
            </div>
            <div className="UppyProgressBar"/>
    </>
    )
})
export default UploadButton
