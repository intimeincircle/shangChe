import {FunctionComponent} from "react";
import {useClipboard} from "@chakra-ui/react";
import {WhiteHeader} from "../../components/WhiteHeader";

const Page: FunctionComponent = () => {

    const {value, onCopy} = useClipboard("Text to copy");

    return (
        <>
            <WhiteHeader/>
            <div>
                {/* eslint-disable-next-line react/button-has-type */}
                <button onClick={onCopy}>
                    Was it copied? {value}
                </button>
            </div>
        </>
    )
}

export default Page;
