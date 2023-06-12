import {createRef, FC} from "react";
// @ts-ignore
import { useScreenshot } from 'use-react-screenshot'

const Screenshot: FC =  () => {
    // @ts-ignore
    const ref = createRef<HTMLDivElement>(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)

    // @ts-ignore
    // @ts-ignore
    return (
        <div>

            <div>
                {/* eslint-disable-next-line react/button-has-type */}
                <button style={{ marginBottom: '10px' }} onClick={getImage}>
                    Take screenshot
                </button>
            </div>
            <img src={image} alt="Screenshot" />
            <div ref={ref}>
                <h1>use-react-screenshot</h1>
                <p>
                    <strong>hook by @vre2h which allows to create screenshots</strong>
                </p>
            </div>
        </div>
    )
}

export {Screenshot}