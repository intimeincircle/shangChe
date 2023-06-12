import {FunctionComponent} from "react";

export const OrEmptyComponennt: FunctionComponent<{size: number, mounted: boolean}> = (props) => (
    <>
        {
            props.size === 0 && props.mounted &&  (
                <div>
                    暂无数据...
                </div>
            )
        }
        {
            props.children
        }
    </>
)
