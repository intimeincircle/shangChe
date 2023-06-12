import React, {FunctionComponent, memo, useMemo, useState} from "react";
import {HorseSeriesReturn} from "kun-shared/built/src_managed/HorseSeriesReturn";
import {Flex, Container, useColorModeValue, Button, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Modal} from "@chakra-ui/react";
import {useAsync} from "react-use";
import {getMyCreatedSeries} from "kun-shared/built/apis/series";
import {Logo} from "../Logo";
import {CONST_EMPTY_ARRAY} from "../../util/default-empty";

// TODO reduce size
// import 'rsuite/dist/rsuite.min.css'

import {DynamicTag} from "../InputTags";

interface Props{
    loading: boolean;
    onSelectSeries: (r : HorseSeriesReturn, tags: string[]) => void
}

export const SimpleEditorHeader: FunctionComponent<Props> = memo((props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [tags, setTags] = useState<string[]>([])
    const initialRef: React.MutableRefObject<any> = React.useRef()
    const finalRef: React.MutableRefObject<any> = React.useRef()
    const [selectedLabel, setLabel] = useState('')
    const [selectedChannel, setChannel] = useState<HorseSeriesReturn>()
    const getttingSeries = useAsync(()=> getMyCreatedSeries({}, {pageSize: 200}), [])
    const items = useMemo(() => (getttingSeries.value?.records ?? CONST_EMPTY_ARRAY).map(r => ({...r, label: r.title})), [getttingSeries.value?.records])
    console.log('items', items);
    console.log('value', selectedLabel)

    return (
        <div>
            xxxx
            <Button onClick={() => onOpen()} loading={props.loading}>
                发布
            </Button>

            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH="60px"
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle="solid"
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align="center">
                <Container
                    display="flex"
                    align="center"
                    alignItems="center"
                    maxW="container.lg"
                >
                    <Flex
                        flex={{base: 1, md: 'auto'}}
                        ml={{base: -2}}
                    >
                        <Logo/>
                    </Flex>

                    <Button onClick={() => onOpen()} loading={props.loading}>
                        发布
                    </Button>
                </Container>
            </Flex>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>选择发布至</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>发布至</FormLabel>
                        </FormControl>

                        <FormControl>
                            <FormLabel>标签</FormLabel>
                            <DynamicTag onChange={setTags}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3}>取消</Button>
                        <Button colorScheme="yellow"
                                disabled={selectedChannel == null}
                                onClick={() => {
                                    if(selectedChannel != null) {
                                        props.onSelectSeries(selectedChannel, tags)
                                    }
                        }}>
                            发布
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
})
