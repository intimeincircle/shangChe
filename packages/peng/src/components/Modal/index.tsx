import {FunctionComponent} from "react";
import {useParams} from "react-router";
import {
    ModalOverlay,
    ModalFooter,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    Button,
    Modal,

    } from '@chakra-ui/react';
import {CreateShareLink} from "../../pages/Horse/Card";
import {useQueryParams} from "../../app/params";


export const CreateLinkButton: FunctionComponent= () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const {id} = useQueryParams() as {id: string};

    return (
        <>
            <Button onClick={onOpen}>Add Link</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                       <CreateShareLink seriesId={id} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
