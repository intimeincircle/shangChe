import {FC} from "react";
import {MantineProvider} from "@mantine/core";
import {ChakraProvider} from "@chakra-ui/react";
import {chakraTheme, mThem} from "./theme";
import {mantine} from "../client/chakraKey";

const ServerApp: FC = ({children}) => (
    <ChakraProvider theme={chakraTheme} resetCSS>
        <MantineProvider theme={mThem} emotionOptions={{key: mantine}}>
            {children}
        </MantineProvider>
    </ChakraProvider>
);
export {ServerApp}