import {Button, Flex, Stack } from "@chakra-ui/react"
import { FunctionComponent } from "react"

interface Props {
    name: string
}

export const BaiduDownload : FunctionComponent<Props> = (props) => {
    console.log('props', props);
    return (
        <Stack direction="row" spacing={4} py={4} px={4}>
            <Flex direction="column" >
                <Button>Download</Button>
            </Flex>
        </Stack>

    )
}
